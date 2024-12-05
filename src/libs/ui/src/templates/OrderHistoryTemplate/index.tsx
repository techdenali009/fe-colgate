import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useLazyGetOrdersQuery } from '@store/services/Endpoints/OrderApi';
import { LiaFileDownloadSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Eye } from 'lucide-react';
import ReactPaginate from 'react-paginate';
import CarouselPrevArrow from '@ui/atoms/SvgAtoms/CarouselPrevArrow';
import CarouselNextArrow from '@ui/atoms/SvgAtoms/CarouselNextArrow';
import SearchBar from '@ui/molecules/SearchBar';

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

interface ProductDetails {
  _id: string;
  name: string;
  description: string;
  price: number;
}

interface Product {
  product: ProductDetails;
  quantity: number;
  priceSnapshot: number;
  _id: string;
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
  products: Product[];
  orderStatus: string;
  totalAmount: number;
  orderId: string;
  taxAmount: number;
  shippingCost: number;
  estimatedDelivery: string;
  createdAt: string;
  updatedAt: string;
}

interface OrderResponse {
  status: string;
  message: string;
  data: {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    data: any;
    orders: Order[];
    meta: {
      totalRecords: number;
      totalPages: number;
      currentPage: number;
      limit: number;
      hasMore: boolean;
    };
  };
}

interface OrderQueryParams {
  userId: string;
  page?: number;
  limit?: number;
  orderStatus?: string;
  orderId?: string;
}

const OrderHistoryTemplate: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All Orders');
  const [currentPage, setCurrentPage] = useState(1);

  const [, setIsModalOpen] = useState(false);
  
  const [, setSelectedOrder] = useState<Order | null>(null);

  const [, setStatusCounts] = useState({
    allOrders: 0,
    pending: 0,
    shipped: 0,
    cancelled: 0,
  });

  const userInfo = useSelector((state: RootState) => state.authSlice.userInfo);
  const userId = userInfo?._id;

  const [getOrders, { data: orderResponse }] = useLazyGetOrdersQuery<OrderResponse>();
  const totalPages = orderResponse?.data?.meta.totalPages || 1;

  const fetchOrders = async () => {
    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    try {
      const queryParams: OrderQueryParams = {
        userId,
        page: currentPage,
        limit: 2,
        orderStatus: selectedStatus === 'All Orders' ? undefined : selectedStatus,
        orderId: searchTerm,

      };
      await getOrders(queryParams).unwrap();
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    }
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (orderResponse?.data?.orders) {
      const counts = {
        allOrders: orderResponse.data.meta.totalRecords || 0,
        pending: 0,
        shipped: 0,
        cancelled: 0,
      };

      orderResponse.data.orders.forEach((order: Order) => {
        if (order.orderStatus === 'Pending') counts.pending += 1;
        else if (order.orderStatus === 'Shipped') counts.shipped += 1;
        else if (order.orderStatus === 'Cancelled') counts.cancelled += 1;
      });

      setStatusCounts(counts);
    }
  }, [orderResponse]);

  useEffect(() => {
    if (userId) {
      fetchOrders();
    }
  }, [userId, currentPage, selectedStatus, searchTerm]);

  const getStatusColor = (status: string): string => {
    const colors: Record<string, string> = {
      Pending: 'text-yellow-500',
      Delivered: 'text-green-500',
      Cancelled: 'text-red-500',
      Paid: 'text-green-500',
    };
    return colors[status] || 'text-green-500';
  };

  const getPaymentColor = (method: string): string => {
    const colors: Record<string, string> = {
      Paid: 'text-green-500',
      COD: 'text-orange-500',
    };
    return colors[method] || 'text-[#06e759]';
  };



  return (
    <div className="p-6 max-w-6xl bg-[#f2f3f5] rounded-lg shadow-sm">
      <h1 className="border-black text-xl font-semibold mb-6 pb-2 border-b">
        Order History
      </h1>
      <div className="flex gap-11 mb-6">
        {['All Orders', 'Pending', 'Shipped', 'Cancelled'].map((label) => (
          <button
            key={label}
            className={`pb-2 transition-colors ${selectedStatus === label
              ? 'text-appTheme border-b-2 border-appTheme'
              : 'text-black-500 hover:text-black-700'
            }`}
            onClick={() => setSelectedStatus(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex justify-between mb-6">
        <div className="relative">
          <SearchBar
            searchQuery={searchTerm}
            setSearchQuery={setSearchTerm}
            placeholder="Search Orders"
            InputclassName="bg-[#f2f3f5]"
            searchclassName="bg-[#f2f3f5] rounded-[15rem] px-[14px] py-[5px] "
          />

        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-[#f7f9fa] text-black font-HeroNewRegular whitespace-nowrap">
              <th className="py-3 px-4 text-left font-medium">ID</th>
              <th className="py-3 px-4 text-left font-medium">Product Name</th>
              <th className="py-3 px-4 text-left font-medium">Payment</th>
              <th className="py-3 px-4 text-left font-medium">Order Status</th>
              <th className="py-3 px-4 text-left font-medium">Total</th>
              <th className="py-3 px-4 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-sm font-normal">
            {orderResponse?.data?.orders.map((order: Order) => (
              <tr key={order._id} className="hover:bg-gray-50">
                <td className="py-4 px-4 text-appTheme">#{order.orderId.slice(0, 8)}</td>
                <td className="py-4 px-4">
                  {order.products.map((p) => (
                    <div key={p._id}>{p.product.name}</div>
                  ))}
                </td>
                <td className="py-4 px-4">
                  <span className={getPaymentColor(order.paymentInfo.method)}>
                    {order.paymentInfo.method}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={getStatusColor(order.orderStatus)}>
                    {order.orderStatus}
                  </span>
                </td>
                <td className="py-4 px-4"> ₹{order.totalAmount}</td>
                <td className="py-4 px-4 flex gap-3">
                  {/* <button className="text-blue-600 hover:underline">View</button> */}
                  <button
                    className="text-appTheme hover:underline flex items-center"
                    title="View Order" onClick={() => handleViewOrder(order)}
                  >
                    <Eye className="w-5 h-5" />

                  </button>
                  {/* Invoice Download Icon */}
                  <button
                    className="text-red-400 hover:underline flex items-center"
                    title="Remove"
                  >
                    <RiDeleteBin6Line className="w-5 h-5" />
                  </button>
                  {/* Cancel Order Icon */}
                  <button
                    className="text-green-400 hover:underline flex items-center"
                    title="Download"
                  >
                    <LiaFileDownloadSolid className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
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
    </div>
  );
};

export default OrderHistoryTemplate;
