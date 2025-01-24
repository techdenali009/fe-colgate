import React, { useState } from 'react';
import { Eye, Download } from 'lucide-react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LiaFileDownloadSolid } from 'react-icons/lia';
import ReactPaginate from 'react-paginate';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import OrderPopover from '../OrderPopover';
import CarouselPrevArrow from '@ui/atoms/SvgAtoms/CarouselPrevArrow';
import CarouselNextArrow from '@ui/atoms/SvgAtoms/CarouselNextArrow';
import { MdAddComment } from 'react-icons/md';
import * as XLSX from 'xlsx';


interface Order {
  _id: string;
  userId: {
    firstName: string;
    lastName: string;
    email: string;
  };
  orderId: string;
  products: Array<{
    product: {
      name: string;
      price: number;
    };
    quantity: number;
  }>;
  totalAmount: number;
  orderStatus: string;
  createdAt: string;
  estimatedDelivery: string;
}

interface OrderManagementProps {
  orders: Order[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  handleDelete: (id: string, orderId: string) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
  setSelectedOrder:React.Dispatch<React.SetStateAction<string>>;
  setShowInvoice:React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderManagement: React.FC<OrderManagementProps> = ({
  orders,
  page,
  setPage,
  totalPages,
  handleDelete,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  setSelectedOrder,
  setShowInvoice
}) => {
  const navigate = useNavigate();
  const [visiblePopover, setVisiblePopover] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const statusOptions = [
    'all',
    'Pending',
    'Processing',
    'Shipped',
    'Delivered',
    'Cancelled',
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
    case 'pending':
      return 'bg-yellow-500 text-white';
    case 'processing':
      return 'bg-blue-500 text-white';
    case 'shipped':
      return 'bg-green-500 text-white';
    case 'delivered':
      return 'bg-green-500 text-white';
    case 'cancelled':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-500 text-white';
    }
  };
  const togglePopover = (id: string) => {
    setVisiblePopover((prev) => (prev === id ? null : id));
  };
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handeleDownload = (order: any) => {
    setShowInvoice(true);
    setSelectedOrder(order);
  };
  const handleExportToExcel = () => {
    // Transform orders data to Excel-friendly format
    const excelData = orders.map((order) => ({
      'Order ID': order.orderId,
      'Customer Name': `${order.userId.firstName} ${order.userId.lastName}`,
      'Customer Email': order.userId.email,
      'Total Products': order.products.length,
      'Product Details': order.products
        .map((p) => `${p.product.name} (Qty: ${p.quantity})`)
        .join('; '),
      'Total Amount': order.totalAmount,
      'Order Status': order.orderStatus,
      'Order Date': formatDate(order.createdAt),
      'Estimated Delivery': formatDate(order.estimatedDelivery),
    }));

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    // Create workbook and add worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders');

    // Generate Excel file
    XLSX.writeFile(
      workbook,
      `Orders_Export_${new Date().toISOString().split('T')[0]}.xlsx`
    );
  };
  const renderProductColumn = (
    products: Order['products'],
    orderId: string
  ) => {
    console.log('products.length', products.length);
    if (products.length === 0) return 'No Products';

    const totalQuantity = products.reduce(
      (total, product) => total + product.quantity,
      0
    );

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
            onClick={() => navigate(`${orderId}`)}
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
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-7xl my-4 lg:my-8 font-HeroNewRegular">
      <div className="bg-gradient-to-r from-appTheme to-appTheme-opacity-80 px-4 lg:px-6 py-4 lg:py-5">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white">
              Order Management
            </h2>
            <p className="text-blue-100 mt-1 text-sm lg:text-base">
              Track and manage your orders efficiently
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
            <div className="w-full lg:w-auto">
              <SearchBar
                searchQuery={searchTerm}
                setSearchQuery={setSearchTerm}
                placeholder="Search Orders"
                InputclassName="w-full"
                searchclassName="!rounded-xl !my-0 bg-white border-white w-full lg:w-[200px] lg:!w-[300px]"
              />
            </div>

            <div className="w-full lg:w-auto relative flex space-x-2">
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value === 'all' ? '' : e.target.value
                  )}
                className="w-full lg:w-auto appearance-none pl-4 pr-8 py-2.5 bg-white text-appTheme rounded-lg hover:bg-blue-50 transition"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>

              <div className="w-full lg:w-auto">
                <button
                  className="flex items-center justify-center gap-2 w-full lg:w-auto px-5 py-2.5 font-HeroNewSemiBold bg-white text-appTheme rounded-lg hover:bg-blue-50 transition"
                  onClick={handleExportToExcel}
                >
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Export</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden w-full">
        {orders && orders.length > 0 ? (
          <div className="hidden lg:block">
            <table className="w-full font-HeroNewRegular">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    'Order ID',
                    'Customer',
                    'Product and Quantity',
                    'Total Amount',
                    'Order Date',
                    'Status',
                    'Actions',
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="p-4 text-xs font-bold text-gray-600 tracking-wider text-left"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-100 transition">
                    <td
                      className="p-4 whitespace-nowrap text-sm font-medium text-gray-500 uppercase font-HeroNewBold"
                      onClick={() => navigate(`${order._id}`)}
                    >
                      {order.orderId.slice(0, 8)}..
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            alt={`${order.userId.firstName} ${order.userId.lastName}`}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-semibold text-gray-900">
                            {`${order.userId.firstName} ${order.userId.lastName}`
                              .length > 12
                              ? `${order.userId.firstName} ${order.userId.lastName}`.slice(
                                0,
                                12
                              ) + '...'
                              : `${order.userId.firstName} ${order.userId.lastName}`}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      {renderProductColumn(order.products, order._id)}
                    </td>
                    <td className="p-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      ₹{order.totalAmount.toFixed(2)}
                    </td>
                    <td className="p-4 whitespace-nowrap text-sm text-gray-600">
                      {formatDate(order.createdAt)}
                    </td>
                    <td className="py-4  flex justify-center items-center">
                   
                      <span
                        className={`my-2 py-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-center   ${getStatusColor(
                          order.orderStatus
                        )}`}
                      >
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap ">
                      <div className="flex items-center gap-3">
                        <button
                          className="text-appTheme hover:text-appTheme-opacity-70 transition transform hover:scale-110"
                          onClick={() => navigate(`${order._id}`)}
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          className={`text-red-500 hover:text-red-700 transition transform ${
                            order.orderStatus !== 'Cancelled'
                              ? 'hover:scale-110'
                              : 'opacity-50 cursor-not-allowed'
                          }`}
                          onClick={() => handleDelete(order._id, order.orderId)}
                          disabled={order.orderStatus == 'Cancelled'}
                        >
                          <RiDeleteBin6Line className="w-5 h-5" />
                        </button>
                        <div className="relative">
                          <button
                            className="text-slate-500 hover:text-slate-700 transition transform hover:scale-110"
                            onClick={() => togglePopover(order._id)}
                            aria-label="More Options"
                          >
                            <BsThreeDotsVertical className="text-xl cursor-pointer" />
                          </button>

                          {visiblePopover === order._id && (
                            <div className="absolute ">
                              <OrderPopover
                                onAddComment={() => {
                                  navigate(`/admin/addcomment/${order._id}`);
                                }}
                                onDownloadPDF={() => {
                                  handeleDownload(order);
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-xl text-gray-500">No orders found</p>
          </div>
        )}

        {/* Mobile Card View (remains the same as previous implementation) */}
        <div className="lg:hidden p-4 space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <div
                  className="text-sm font-bold text-appTheme"
                  onClick={() => navigate(`${order._id}`)}
                >
                  Order #{order.orderId.slice(0, 8)}
                </div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                    order.orderStatus
                  )}`}
                >
                  {order.orderStatus}
                </span>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                {order.userId.firstName} {order.userId.lastName}
              </div>

              <div className="mb-2">
                {renderProductColumn(order.products, order._id)}
              </div>
              <div className="flex justify-between items-center border-t pt-2">
                <div className="text-sm font-bold">
                  ₹{order.totalAmount.toFixed(2)}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="text-appTheme hover:text-appTheme-opacity-70"
                    onClick={() => navigate(`${order._id}`)}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    className={`text-red-500 hover:text-red-700 transition transform ${
                      order.orderStatus !== 'Cancelled'
                        ? 'hover:scale-110'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => handleDelete(order._id, order.orderId)}
                    disabled={order.orderStatus == 'Cancelled'}
                  >
                    <RiDeleteBin6Line className="w-5 h-5" />
                  </button>
                  <button
                    className="text-green-600 hover:text-green-800"
                    onClick={() => {
                      navigate(`/admin/addcomment/${order._id}`);
                    }}
                  >
                    <MdAddComment className="w-5 h-5" />
                  </button>
                  <button
                    className="text-green-600 hover:text-green-800"
                    onClick={() => {
                      handeleDownload(order);
                    }}
                  >
                    <LiaFileDownloadSolid className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {orders.length > 0 && (
        <div className="p-4 lg:p-6 flex flex-col lg:flex-row justify-between items-center bg-gray-50">
          <div className="text-sm text-gray-600 mb-4 lg:mb-0">
            Showing page {page} of {totalPages}
          </div>
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={0}
            breakLabel="..."
            onPageChange={({ selected }) => setPage(selected + 1)}
            containerClassName="flex items-center space-x-2"
            pageClassName="px-3 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300 dark:text-black dark:hover:bg-gray-600 text-xs"
            activeClassName="!bg-appTheme-opacity-70 !text-white"
            previousLabel={<CarouselPrevArrow></CarouselPrevArrow>}
            nextLabel={<CarouselNextArrow />}
            previousClassName={`px-2 py-1 rounded bg-gray-100 text-xs ${
              page === 1
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-400 text-appTheme cursor-pointer hover:!bg-appTheme-opacity-10'
            }`}
            nextClassName={`px-2 py-1 rounded bg-gray-100 text-xs ${
              page === totalPages
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-400 text-appTheme cursor-pointer hover:!bg-appTheme-opacity-10'
            }`}
          />
        </div>
      )}
     
    </div>
  );
};

export default OrderManagement;
