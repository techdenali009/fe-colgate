
export const OrderHistorySkeleton = () => {
  return (
    <div className="p-6 max-w-6xl bg-[#f2f3f5] rounded-lg animate-pulse">
      {/* Title */}
      <div className="h-8 bg-gray-300 rounded mb-6 w-3/4"></div>

      {/* Horizontal Line */}
      <div className="relative mb-6">
        <div className="absolute bottom-0 left-0  h-0.5 bg-gray-300"></div>
      </div>

      {/* Buttons */}
      <div className="flex gap-10 relative font-HeroNewRegular">
        {['All Orders', 'Pending', 'Shipped', 'Cancelled'].map((label) => (
          <div key={label} className="h-5 bg-gray-300 rounded w-20"></div>
        ))}
      </div>

      {/* Search and Date Inputs */}
      <div className="flex justify-between mb-6">
        <div className="w-1/4">
          <div className="h-8 bg-gray-300 rounded w-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 bg-gray-300 rounded w-24"></div>
          <div className="h-8 bg-gray-300 rounded w-16"></div>
          <div className="h-8 bg-gray-300 rounded w-24"></div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-[#f7f9fa] text-black font-HeroNewRegular whitespace-nowrap">
              <th className="py-3 px-4 text-left font-medium">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </th>
              <th className="py-3 px-4 text-left font-medium">
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </th>
              <th className="py-3 px-4 text-left font-medium">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </th>
              <th className="py-3 px-4 text-left font-medium">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </th>
              <th className="py-3 px-4 text-left font-medium">
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </th>
              <th className="py-3 px-4 text-left font-medium">
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-sm font-normal">
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="h-4 bg-gray-300 rounded w-20"></div>
                </td>
                <td className="py-4 px-4">
                  <div className="h-4 bg-gray-300 rounded w-48"></div>
                </td>
                <td className="py-4 px-4">
                  <div className="h-4 bg-gray-300 rounded w-32"></div>
                </td>
                <td className="py-4 px-4">
                  <div className="h-4 bg-gray-300 rounded w-28"></div>
                </td>
                <td className="py-4 px-4">
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                </td>
                <td className="py-4 px-4 flex gap-3 mt-2">
                  <div className="h-4 bg-gray-300 rounded w-12"></div>
                  <div className="h-4 bg-gray-300 rounded w-12"></div>
                  <div className="h-4 bg-gray-300 rounded w-12"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 bg-gray-300 rounded w-12"></div>
          <div className="h-8 bg-gray-300 rounded w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistorySkeleton;
