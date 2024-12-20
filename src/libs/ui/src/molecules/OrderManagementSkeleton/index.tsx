import React from 'react';

const OrderManagementSkeleton: React.FC = () => {
  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-7xl mx-auto my-8 animate-pulse">
      {/* Header Section Skeleton */}
      <div className="bg-gradient-to-r from-appTheme to-appTheme-opacity-80 px-6 py-5 flex justify-between items-center w-full">
        <div>
          <div className="h-8 bg-gray-300 rounded w-64 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-10 bg-gray-200 rounded-xl w-64"></div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              {['Order ID', 'Customer', 'Product', 'Total Amount', 'Order Date', 'Status', 'Actions'].map((header, index) => (
                <th key={index} className="p-4 text-xs font-bold text-gray-600 tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[...Array(10)].map((_, index) => (
              <OrderRowSkeleton key={index} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Skeleton */}
      <div className="p-6 flex justify-between items-center bg-gray-50">
        <div className="h-4 bg-gray-200 rounded w-32"></div>
        <div className="flex items-center space-x-2">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="h-8 w-8 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OrderRowSkeleton: React.FC = () => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </td>
      <td className="p-4 whitespace-nowrap">
        <div>
          <div className="h-4 bg-gray-200 rounded w-36 mb-2"></div>
          <div className="h-3 bg-gray-100 rounded w-48"></div>
        </div>
      </td>
      <td className="p-4 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded w-36"></div>
        <div className="h-3 bg-gray-100 rounded w-24 mt-1"></div>
      </td>
      <td className="p-4 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </td>
      <td className="p-4 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded w-28"></div>
      </td>
      <td className="p-4 whitespace-nowrap">
        <div className="h-6 bg-gray-200 rounded w-20"></div>
      </td>
      <td className="p-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-5 w-5 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </td>
    </tr>
  );
};

export default OrderManagementSkeleton;