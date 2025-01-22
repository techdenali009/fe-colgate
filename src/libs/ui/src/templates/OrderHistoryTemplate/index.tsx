import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useLazyGetOrdersQuery, useUpdateOrderMutation } from '@store/services/Endpoints/OrderApi';
import { LiaFileDownloadSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Eye } from 'lucide-react';
import ReactPaginate from 'react-paginate';
import CarouselPrevArrow from '@ui/atoms/SvgAtoms/CarouselPrevArrow';
import CarouselNextArrow from '@ui/atoms/SvgAtoms/CarouselNextArrow';
import SearchBar from '@ui/molecules/SearchBar';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '@ui/molecules/ConfirmationModal';

import 'jspdf-autotable';
import OrderHistoryInvoice from '@ui/organisms/OrderHistoryInvoice';
import OrderHistorySkeleton from '@ui/molecules/OrderHistorySkelton';

// Types
interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface PaymentInfo {
  method: string;
  status: string;
}

interface Order {
  _id: string;
  userId: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  shippingAddress: ShippingAddress;
  billingAddress: ShippingAddress;
  paymentInfo: PaymentInfo;
  products: Array<{
    product: {
      name: string;
      price: number;
    };
    quantity: number;
  }>;
  orderStatus: string;
  totalAmount: number;
  orderId: string;
  taxAmount: number;
  shippingCost: number;
  estimatedDelivery: string;
  createdAt: string;
  updatedAt: string;
  discount: {
    couponCode: string,
    amount: number
},

}

interface OrderQueryParams {
  userId: string;
  page?: number;
  limit?: number;
  orderStatus?: string;
  orderId?: string;
  startDate?: string; // Added startDate
  endDate?: string;   // Added endDate
  productName: string,
}
interface OrderData {
  orderStatus: string | undefined;
}
interface UpdateOrderParams {
  orderId: string | undefined;
  orderData: OrderData;

}

const OrderHistoryTemplate: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All Orders');
  const [currentPage, setCurrentPage] = useState(1);
  const [showInvoice, setShowInvoice] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  const userInfo = useSelector((state: RootState) => state.authSlice.userInfo);
  const [userToDelete, setUserToDelete] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const Navigate = useNavigate();
  const [startDate] = useState('');
  const [endDate] = useState('');
  const userId = userInfo?._id;
  const [getOrders, { data: orderResponse, isLoading }] = useLazyGetOrdersQuery();
  const totalPages = orderResponse?.data?.meta.totalPages || 1;
  const [updateOrder] = useUpdateOrderMutation();

  const fetchOrders = async () => {
    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    try {
      const queryParams: OrderQueryParams = {
        userId,
        page: currentPage,
        limit: 3,
        orderStatus: selectedStatus === 'All Orders' ? undefined : selectedStatus,
        orderId: searchTerm,
        productName: searchTerm,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      };
      const response = await getOrders(queryParams).unwrap();
      if (response?.data?.orders) {
        response.data.orders.forEach((order: Order) => {
          console.log(`Order ID: ${order._id}, Coupon Code: ${order.discount.couponCode}`);
        });
      }
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    }
  };


  const handleInvoiceView = (order: Order) => {
    setSelectedOrder(order);
    setShowInvoice(true);
  };
  useEffect(() => {
    if (userId) {
      fetchOrders();
    }
  }, [userId, currentPage, selectedStatus, searchTerm, endDate]);

  const getStatusColor = (status: string): string => {
    const colors: Record<string, string> = {
      Pending: 'bg-[#edbf37] pt-[1px] pb-[1px] pl-[6px] pr-[6px] rounded-full text-white font-thin',
      Delivered: 'bg-[#0D9276] pt-[1px] pb-[1px] pl-[6px] pr-[6px] rounded-full text-white font-thin',
      Cancelled: 'bg-[#F95454] pt-[1px] pb-[1px] pl-[5px] pr-[5px] rounded-full text-white font-thin',
      Paid: 'text-green-500 ',
    };
    return colors[status] || 'bg-[#4CB648] pt-[1px] pb-[1px] pl-[5px] pr-[5px] rounded-full text-white font-thin';
  };
  const handleOrderRemove = (id: string) => {
    console.log('id', id);
    setUserToDelete(id);
    setShowModal(true);
  }

  const getPaymentColor = (method: string): string => {
    const colors: Record<string, string> = {
      Paid: 'border border-[#127554] pl-[6px] pr-[6px] rounded-full pt-[1px] pb-[1px] text-[#127554]',
      COD: 'border border-[#F86F03] pl-[6px] pr-[6px] rounded-full pt-[1px] pb-[1px] text-[#F86F03]',
    };
    return colors[method] || 'text-[#22668D]  pl-[6px] pr-[6px] font- rounded-full pt-[1px] pb-[1px] border border-[#22668D]'; //default
  };

  const handleDeleteConfirm = async () => {
    if (userToDelete) {
      try {
        const updatePayload: UpdateOrderParams = {
          orderId: userToDelete,
          orderData: {
            orderStatus: 'Cancelled'
          }
        };

        const response = await updateOrder(updatePayload);
        console.log('Order updated successfully:', response);
        if (response.data) {
          console.log('Order updated successfully:', response);

        }
        else if ('error' in response) {
          // Handle error response
          console.error('Error updating order:', response.error);
        }
      } catch (error) {

        console.error('Error updating order:', error);

      }
      setShowModal(false);

      fetchOrders();
    }

  };
  const renderProductColumn = (
    products: Order['products'],
    orderId: string
  ) => {
    if (products.length === 0) return 'No Products';

    const totalQuantity = products.reduce(
      (total, product) => total + product.quantity,
      0
    );

    console.log('length', products.length);
    if (products.length === 1) {
      return (
        <div>
          <div className="text-sm text-gray-900">
            {products[0].product.name}
          </div>
          <span className="text-xs text-gray-500">
            Qty: {products[0].quantity}
          </span>
        </div>
      );
    }

    return (
      <div>
        <div className="text-sm text-gray-900">
          {products[0].product.name}{' '}
          <span
            className="text-xs text-gray-500 hover:text-appTheme hover:underline"
            onClick={() => Navigate(`${orderId}`)}
          >
            + {products.length - 1} more
          </span>
        </div>
        <span className="text-xs text-gray-500">
          Total Qty: {totalQuantity}
        </span>
      </div>
    );
  };


  return (
    <>
      {isLoading ? (<OrderHistorySkeleton />
      ) : (
        <div className="p-6 max-w-6xl bg-[#f2f3f5] rounded-lg">
          <h1 className=" text-xl font-semibold mb-6 pb-2 ">
            Order History
          </h1>
          <div className="relative mb-6">
            {/* Horizontal Line */}


            {/* Labels */}
            <div className="flex gap-10 relative  border-b border-black">
              {['All Orders', 'Pending', 'Shipped', 'Cancelled'].map((label) => (
                <button
                  key={label}
                  className={`pb-2 transition-colors  relative  ${selectedStatus === label
                    ? 'text-appTheme border-b-5 font-HeroNewBold'
                    : ' hover:text-black-700'
                  }`}
                  onClick={() => setSelectedStatus(label)}
                >
                  {label}


                </button>

              ))}

            </div>
            <hr></hr>
          </div>

          <div className="flex justify-between mb-6">
            <div className="w-1/4">
              <SearchBar
                searchQuery={searchTerm}
                setSearchQuery={setSearchTerm}
                placeholder="Search Orders"
                InputclassName="bg-[#f2f3f5]"
                searchclassName="bg-[#f2f3f5]  rounded-[15rem] px-[14px] py-[5px] xl:!w-[546px] 2xs:!w-[357px] lg:!w-[1px]"
              />
            </div>
            {/* <div className="flex items-center gap-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="rounded-full px-1 h-8 bg-[#f2f3f5] border-2 text-[13px] w-[109px] border-[#d5d9de]"
              />
              <span className='font-HeroNewExtraBold'>To</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="rounded-full px-1 h-8 bg-[#f2f3f5] border-2 text-[13px] w-[109px] border-[#d5d9de]"
              />
            </div> */}
          </div>

          <div className="overflow-x-auto w-full">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-appTheme text-white font-HeroNewRegular whitespace-nowrap">
                  <th className="py-3 px-4 text-left font-medium">ID</th>
                  <th className="py-3 px-4 text-left font-medium">Product Name</th>
                  <th className="py-3 px-4 text-left font-medium">Payment</th>
                  <th className="py-3 px-4 text-left font-medium">Order Status</th>
                  <th className="py-3 px-4 text-left font-medium">Total</th>
                  <th className="py-3 px-4 text-left font-medium">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white text-sm font-normal">
                {orderResponse?.data?.orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500">
                      No products available
                    </td>
                  </tr>
                ) : (
                  orderResponse?.data?.orders.map((order: Order) => (
                    <tr key={order._id} className="hover:bg-gray-50">
                      <td className="py-4 px-4  font-bold text-darkGray font-[Hero New Regular">#{order.orderId.slice(0, 8)}</td>
                      <td className="py-4 px-4">
                        {renderProductColumn(order.products, order._id)}
                      </td>
                      <td className="py-4 px-4 font-bold font-[Hero New Regular">
                        <span className={getPaymentColor(order.paymentInfo.method)}>
                          {order.paymentInfo.method}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-bold font-[Hero New Regular">
                        <span className={getStatusColor(order.orderStatus)}>
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="py-4 px-4"> ₹{order.totalAmount}</td>
                      <td className="py-4 px-4 flex gap-3 mt-2">
                        {/* <button className="text-blue-600 hover:underline">View</button> */}
                        <button
                          className="text-appTheme hover:underline flex items-center"
                          title="View Order" onClick={() => Navigate(`${order._id}`)}
                        >
                          <Eye className="w-5 h-5" />

                        </button>
                        {/* Invoice Download Icon */}
                        <button
                          className="text-red-400 hover:underline flex items-center"
                          title="Remove" onClick={() => handleOrderRemove(`${order._id}`)}
                        >
                          <RiDeleteBin6Line className="w-5 h-5" />
                        </button>
                        {/* Cancel Order Icon */}
                        <button
                          className="text-purple-700 hover:underline flex items-center"
                          title="Download" onClick={() => handleInvoiceView(order)}
                        >
                          <LiaFileDownloadSolid className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <ReactPaginate
              previousLabel={<CarouselPrevArrow />}
              nextLabel={<CarouselNextArrow />}
              pageCount={totalPages}
              onPageChange={({ selected }) => setCurrentPage(selected + 1)}
              containerClassName="flex items-center space-x-2"
              pageClassName="px-3 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300 dark:text-black dark:hover:bg-gray-600 text-xs"
              activeClassName="!bg-appTheme-opacity-70 !text-white"

              previousClassName={`px-2 py-1 rounded bg-gray-100 text-xs ${currentPage === 1
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-400 text-appTheme cursor-pointer hover:!bg-appTheme-opacity-10'
              }`}
              nextClassName={`px-2 py-1 rounded bg-gray-100 text-xs ${currentPage === totalPages
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-400 text-appTheme cursor-pointer hover:!bg-appTheme-opacity-10'
              }`}
            />
          </div>
          {showInvoice && selectedOrder && (
            <OrderHistoryInvoice
              order={selectedOrder}
              onClose={() => setShowInvoice(false)}
            />
          )}
          {showModal && (
            <ConfirmationModal
              onClose={() => setShowModal(false)}
              onConfirm={handleDeleteConfirm}
            />
          )}
        </div>
      )}

    </>
  );
};

export default OrderHistoryTemplate;
