import { Card } from '@ui/atoms/DashBoardCard';
import { CardContent } from '@ui/atoms/DashBoardCardContent';
import { CardHeader } from '@ui/atoms/DashBoardCardHeader';
import { CardTitle } from '@ui/atoms/DashBoardCardTitle';
import React from 'react';

interface Order {
  id: number;
  customer: string;
  product: string;
  status: string;
  amount: string;
}

const RecentOrdersTable: React.FC = () => {
  const recentOrders: Order[] = [
    {
      id: 1,
      customer: 'John Doe',
      product: 'Product A',
      status: 'Delivered',
      amount: '$150',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      product: 'Product B',
      status: 'Pending',
      amount: '$280',
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      product: 'Product C',
      status: 'Processing',
      amount: '$95',
    },
    {
      id: 4,
      customer: 'Sarah Williams',
      product: 'Product D',
      status: 'Delivered',
      amount: '$420',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
    case 'Delivered':
      return 'text-green-600';
    case 'Pending':
      return 'text-yellow-600';
    case 'Processing':
      return 'text-blue-600';
    default:
      return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                  Order ID
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                  Customer
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                  Product
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                  Status
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>{order.id}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {order.customer}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {order.product}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span className={`${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrdersTable;
