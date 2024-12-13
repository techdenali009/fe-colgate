import React from 'react';

import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card } from '@ui/atoms/DashBoardCard';
import { CardContent } from '@ui/atoms/DashBoardCardContent';

const StatsCards: React.FC = () => {
  const stats = [
    {
      label: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      changeColor: 'text-green-600',
      icon: <Users className='h-8 w-8 text-blue-500' />,
    },
    {
      label: 'Revenue',
      value: '$45,678',
      change: '+8.2%',
      changeColor: 'text-green-600',
      icon: <DollarSign className='h-8 w-8 text-green-500' />,
    },
    {
      label: 'Orders',
      value: '1,789',
      change: '-3.1%',
      changeColor: 'text-red-600',
      icon: <ShoppingCart className='h-8 w-8 text-purple-500' />,
    },
    {
      label: 'Growth',
      value: '+15.8%',
      change: '+4.3%',
      changeColor: 'text-green-600',
      icon: <TrendingUp className='h-8 w-8 text-orange-500' />,
    },
  ];

  return (
    <div className='AdminPannel-DashBoard'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        {stats.map((stat, index) => (
          <Card key={index} className='border-2 border-gray-200 rounded-[10px]'>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-gray-500'>
                    {stat.label}
                  </p>
                  <h3 className='text-2xl font-bold'>{stat.value}</h3>
                  <p className={`text-sm ${stat.changeColor}`}>{stat.change}</p>
                </div>
                {stat.icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
