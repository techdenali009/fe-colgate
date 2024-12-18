
const OrderDetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-3 bg-white rounded-lg shadow-sm ">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className='flex items-center gap-4'>
          <div className="w-24 h-6 bg-gray-200 rounded"></div>
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="w-24 h-6 bg-gray-200 rounded"></div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-8">
        {/* Customer Details */}
        <div className="border p-2">
          <div className="w-32 h-4 bg-gray-200 rounded mb-3"></div>
          <hr />
          <div className="space-y-2">
            <div className="w-48 h-6 bg-gray-200 rounded mb-4"></div>
            <div className="w-72 h-4 bg-gray-200 rounded"></div>
            <div className="w-72 h-4 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="border p-2">
          <div className="w-32 h-4 bg-gray-200 rounded mb-3"></div>
          <hr />
          <div className="space-y-2 font-medium font-HeroNewRegular text-black">
            <div className="w-48 h-6 bg-gray-200 rounded mb-4"></div>
            <div className="w-72 h-4 bg-gray-200 rounded"></div>
            <div className="w-72 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Total Summary */}
        <div className="border p-2">
          <div className="w-32 h-4 bg-gray-200 rounded mb-3"></div>
          <hr />
          <div className="space-y-3 grid gap-y-2">
            <div className="flex justify-between text-sm">
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
            <hr />
            <div className="flex justify-between text-sm">
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
            <hr />
            <div className="flex justify-between text-sm">
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t text-[#0a184a]">
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
              <div className="w-24 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Info Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-8 border rounded-lg p-4 gap-3">
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div>
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
        </div>
        <div>
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Order Progress */}
      <div className="mb-16 rounded-lg p-6">
        <div className="relative pl-7 pr-10">
          <div className="h-2 bg-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full flex justify-between -mt-3">
            {['Order Placed', 'Cancelled', 'Pending', 'Shipped', 'Delivered'].map((status) => (
              <div key={status} className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-16 h-4 bg-gray-200 rounded mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-1">
                <div className="w-32 h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="text-left px-4 py-1">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="text-left px-4 py-1">
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="text-right px-4 py-1">
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="w-32 h-4 bg-gray-200 rounded"></div>
                </div>
              </td>
              <td className="text-sm p-4">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="text-sm p-4">
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="text-sm text-right p-4">
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsSkeleton;
