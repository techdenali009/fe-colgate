import React from 'react';
import { Card } from '@ui/atoms/DashBoardCard';
import { CardContent } from '@ui/atoms/DashBoardCardContent';
import { CardHeader } from '@ui/atoms/DashBoardCardHeader';
import { CardTitle } from '@ui/atoms/DashBoardCardTitle';
import { recentOrders, getStatusColor } from '@utils/DashBoardData';

const RecentOrdersTable: React.FC = () => {
  return (
    <div className='AdminPannel-DashBoard'>
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.amount}
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
