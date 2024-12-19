
import { useNavigate } from 'react-router-dom';

interface OrderDetailProps {
    orderData: {
        _id: string;
        orderStatus: string;
        shippingAddress: {
            name: string;
            address: string;
            city: string;
            postalCode: string;
            country: string;

        };
        userId: {
            firstName: string;
            lastName: string;
            email: string;
            address: {
                phone: string;
                city: string;
                street: string;
                zipCode: number;
                country: number;
            };
        };
        products: Array<{
            product: {
                _id: string;
                name: string;
                images?: { url: string }[];
            };
            quantity: number;
            priceSnapshot: number;
            _id: string;
        }>;
        totalAmount: number;
        taxAmount: number;
        shippingCost: number;
        createdAt?: string;
        estimatedDelivery?: string;

    };
    isLoading: boolean;
    userEmail?: string;
}


const OrderDetail = ({ orderData, isLoading }: OrderDetailProps) => {
  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!orderData) {
    return <div className="p-4">No order details available.</div>;
  }
  const statuses = ['Order Placed', 'Confirmed', 'Pending', 'Shipped', 'Delivered', 'Cancelled'];

  const getCurrentStepIndex = () => {
    if (!orderData || !orderData.orderStatus) return 0;
    const statusIndex = statuses.findIndex(status => status === orderData.orderStatus);
    return statusIndex === -1 ? 0 : statusIndex;
  };

  // Modified progress width calculation for cancelled orders
  const getProgressStyles = () => {
    if (!orderData || !orderData.orderStatus) return { width: '0%' };

    const currentIndex = getCurrentStepIndex();
    const isCancelled = orderData.orderStatus === 'Cancelled';

    if (isCancelled) {
      return {
        background: 'linear-gradient(to right, #428c0d 0%, #428c0d 38%, #de0e07 45%, #de0e07 100%)',
        width: '100%',

      };
    }

    return {
      width: `${(currentIndex / (statuses.length - 2)) * 100}%`,
      background: '#125ee0' // Default blue color
    };
  };

  const isCancelled = orderData?.orderStatus === 'Cancelled';
  const isShippedOrDelivered = ['Shipped', 'Delivered', 'Pending'].includes(orderData?.orderStatus);
   
  const formatDate = (dateString?: string) => {
    return dateString ? new Date(dateString).toLocaleDateString() : 'N/A';
  };

  const navigate = useNavigate();
  const handleBackToList = () => {
    navigate('/myaccount/Orders'); // Navigate to the correct route
  };
  console.log('orderData', orderData);
  return (
    <div className="max-w-5xl mx-auto p-3 bg-white rounded-lg shadow-sm border-[0.1rem]">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className='flex items-center gap-4'>
          <h1 className="text-xl font-semibold">Order Details</h1>
          <div className="text-gray-500 text-sm">
            <span>{formatDate(orderData.createdAt)}</span>
            <span className="mx-2">•</span>
            <span>{orderData.products?.length || 0} Products</span>
          </div>
        </div>
        <button className="text-appTheme font-bold font-['Hero_New_Bold']" onClick={handleBackToList}>Back to List</button>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3  mb-8">
        {/* Customer Details */}
        <div className="border p-2">
          <h2 className="text-sm text-gray-500 uppercase mb-3">Customer Details</h2>
          <hr />
          <div className="space-y-2">
            <p className="mb-4 mt-4">
              <h2 className='font-HeroNewRegular'>{orderData.userId.firstName}</h2>

              <div className="">
                <h2 className='font-HeroNewRegular text-gray-500 text-[13px] mt-[19px]'>{orderData.userId?.address?.city},{orderData.userId?.address?.street}
                  <p> {orderData.userId?.address?.zipCode}</p>
                </h2>
              </div>
            </p>
            <p className="text-sm">
              <span className="text-gray-600">EMAIL: </span>
              <span className="font-HeroNewRegular">{orderData.userId?.email}</span>

            </p>
            <p className="text-sm mt-2">
              <span className="text-gray-600">PHONE:</span>
              <span className='font-HeroNewRegular'><p></p>{orderData.userId?.address?.phone}</span>
            </p>

          </div>
        </div>

        {/* Shipping Address */}
        <div className="border p-2">
          <h2 className="text-sm text-gray-500 uppercase mb-3">Shipping Address</h2>
          <hr />
          <div className="space-y-2 font-medium font-HeroNewRegular text-black">
            <p className='mb-4 mt-4'>{orderData.shippingAddress?.city}</p>
            <div className='text-gray-500 font-hero text-sm'>
              <p>{orderData.shippingAddress?.address}</p>
              <p>{orderData.shippingAddress?.city} {orderData.shippingAddress?.postalCode}</p>
              <p className="text-black-600">{orderData.shippingAddress?.country}</p>
            </div>
          </div>
        </div>

        {/* Total Summary */}
        <div className="border p-2">
          <h2 className=" text-sm text-gray-500 uppercase mb-3">Total Summary</h2>
          <hr />
          <div className="space-y-3 grid gap-y-2">
            <div className="flex mt-3 justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className='text-darkGray font-HeroNewBold'>₹{(orderData.totalAmount - orderData.taxAmount - orderData.shippingCost).toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className=" text-darkGray font-HeroNewBold">₹{orderData.shippingCost?.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="text-darkGray font-HeroNewBold">₹{orderData.taxAmount?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t text-[#0a184a]">
              <span>Total</span>
              <span className="font-HeroNewExtraBold text-black">₹{orderData.totalAmount?.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Order Info Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-8 border rounded-lg p-4 gap-3">
        <div>
          <div className='flex gap-2 items-center'>
            <span className="text-gray-500 text-xs">ORDER ID:</span>
            <p className="font-medium text-sm">#{orderData._id.slice(0, 8)}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <span className="text-gray-500 text-xs">ITEMS NUMBER:</span>
            <p className="font-medium text-sm">{orderData.products?.length || 0} Products</p>
          </div>
        </div>
        <div>
          <span className="text-gray-500 text-xs">ORDERD DATE</span>
          <p className="font-medium text-sm">{formatDate(orderData.createdAt)}</p>
        </div>
        <div>
          <span className="text-gray-500 text-xs">ESTIMATED DATE</span>
          <p className="font-medium text-sm">{formatDate(orderData.estimatedDelivery)}</p>
        </div>
      </div>

      {/* Order Progress */}
      <div className="mb-16 rounded-lg p-6">
        <div className="relative pl-12 pr-10">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={getProgressStyles()}
            />
          </div>
          <div className="absolute top-0 left-0 w-full flex justify-between -mt-3">
            {statuses.map((status, index) => {
              const isActive = index <= getCurrentStepIndex();

              // Hide the Cancelled status circle unless the order is cancelled
              if (status === 'Cancelled' && !isCancelled && isShippedOrDelivered) {
                return null;
              }

              return (
                <div key={status} className="flex flex-col items-center">

                  <div
                    className={'w-8 h-8 rounded-full flex items-center justify-center'}
                    style={{
                      background: isCancelled ?
                        status === 'Cancelled' ?
                          '#de0e07' : // Red for cancelled status
                          index <= 1 ?
                            '#428c0d' : // Green for first two statuses
                            '#de0e07'   // Red for remaining statuses
                        : isActive ?
                          'var(--app-theme-color, #125ee0)' : // Your app theme color for active
                          'transparent', // Transparent for inactive
                      border: !isActive && !isCancelled ? '2px dashed #6b7280' : 'none',
                      color: (isActive || isCancelled) ? 'white' : 'black'
                    }}
                  >
                    {status === 'Order Placed' ? (
                      <span className="text-white text-xl">✔</span>
                    ) : (
                      <span className={`${(isActive || isCancelled) ? 'text-white' : 'text-black'} text-xs`}>
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-2 font-semibold text-black">
                    {status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-1">Product Name</th>

              <th className="text-left px-4 py-1">Quantity</th>
              <th className="text-right px-4 py-1">Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {orderData.products?.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    {item.product.images && item.product.images.length > 0 && (
                      <img src={item.product.images[0].url} alt={item.product.name} className="w-12 h-12 object-cover" />
                    )}
                    <span className="font-medium">{item.product.name}</span>
                  </div>
                </td>

                <td className="text-sm p-4">{item.quantity}</td>
                <td className="text-sm text-right p-4">₹{item.priceSnapshot.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
