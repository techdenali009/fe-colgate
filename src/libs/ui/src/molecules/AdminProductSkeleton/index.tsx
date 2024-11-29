import React from "react";

const AdminProductSkeleton: React.FC = () => {
  const skeletonRows = Array.from({ length: 10 }); // 10 rows for the skeleton table

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stock
            </th>
            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {skeletonRows.map((_, index) => (
            <tr key={index} className="animate-pulse">
              <td className="p-3">
                <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
              </td>
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              </td>
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
              </td>
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              </td>
              <td className="p-3">
                <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
              </td>
              <td className="p-3">
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-md"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-md"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-md"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductSkeleton;
