import React, { useEffect } from 'react';
import { Card } from '@ui/atoms/DashBoardCard';
import { CardContent } from '@ui/atoms/DashBoardCardContent';
import { CardHeader } from '@ui/atoms/DashBoardCardHeader';
import { CardTitle } from '@ui/atoms/DashBoardCardTitle';
import { useLazyGetAllOrdersQuery } from '@store/services/Endpoints/OrderApi';
import { useNavigate } from 'react-router-dom';

// Define interface for order data
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

const RecentOrdersTable: React.FC = () => {
  const [getOrders, { data: ordersData, isLoading, error }] =
    useLazyGetAllOrdersQuery();
  const navigate = useNavigate();

  useEffect(() => {
    getOrders({
      page: 1,
      limit: 5,
    });
  }, [getOrders]);

  const handleViewAllClick = () => {
    navigate('/admin/Orders'); // Add this function to handle the click event
  };

  if (isLoading) {
    return (
      <div className='AdminPannel-DashBoard'>
        <Card>
          <CardContent>
            <div className='text-center py-4'>Loading orders...</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className='AdminPannel-DashBoard'>
        <Card>
          <CardContent>
            <div className='text-center py-4 text-red-500'>
              Error loading orders
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
    case 'pending':
      return ' text-yellow-800 ';
    case 'processing':
      return ' text-blue-800 ';
    case 'shipped':
      return ' text-green-800 ';
    case 'delivered':
      return ' text-green-900 ';
    case 'cancelled':
      return ' text-red-800 ';
    default:
      return ' text-gray-800 ';
    }
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
          <div className='text-sm text-gray-900'>
            {products[0].product.name}
          </div>
          <span className='text-xs text-gray-500'>
            Qty: {products[0].quantity}
          </span>
        </div>
      );
    }

    return (
      <div>
        <div className='text-sm text-gray-900'>
          {products[0].product.name}{' '}
          <span
            className='text-xs text-gray-500 hover:text-appTheme hover:underline'
            onClick={() => navigate(`orders/${orderId}`)}
          >
            + {products.length - 1} more
          </span>
        </div>
        <span className='text-xs text-gray-500'>
          Total Qty: {totalQuantity}
        </span>
      </div>
    );
  };
  return (
    <div className='AdminPannel-DashBoard'>
      <Card>
        <CardHeader>
          <div className='orders-header flex'>
            <CardTitle>Recent Orders</CardTitle>
            <button
              className='absolute right-[7%] text-[13px] font-sans text-blue-500 underline pt-[4px]'
              onClick={handleViewAllClick}
            >
              View All
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead>
                <tr>
                  <th className='px-6 py-3 text-left text-l text-gray-700 font-bold camelcase font-HeroNewRegular'>
                    Order ID
                  </th>
                  <th className='px-6 py-3 text-left text-l text-gray-700  font-bold camelcase font-HeroNewRegular'>
                    Customer
                  </th>
                  <th className='px-6 py-3 text-left text-l text-gray-700  font-bold camelcase font-HeroNewRegular'>
                    Product
                  </th>
                  <th className='px-6 py-3 text-left text-l text-gray-700  font-bold camelcase font-HeroNewRegular'>
                    Status
                  </th>
                  <th className='px-6 py-3 text-left text-l text-gray-700  font-bold camelcase font-HeroNewRegular'>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {ordersData?.data?.orders?.map((order: Order) => (
                  <tr key={order.orderId}>
                    <td className='px-6 py-4 whitespace-nowrap font-HeroNewRegular'>
                      {order.orderId}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap font-HeroNewRegular'>
                      {order.userId.firstName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap font-HeroNewRegular'>
                      <div className='flex justify-between'>
                        {renderProductColumn(order.products, order._id)}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap font-HeroNewRegular'>
                      <span className={`${getStatusColor(order.orderStatus)}`}>
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap font-HeroNewRegular'>
                      ${order.totalAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentOrdersTable;
