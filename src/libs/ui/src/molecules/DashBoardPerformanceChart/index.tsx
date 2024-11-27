import { Card } from '@ui/atoms/DashBoardCard';
import { CardContent } from '@ui/atoms/DashBoardCardContent';
import { CardHeader } from '@ui/atoms/DashBoardCardHeader';
import { CardTitle } from '@ui/atoms/DashBoardCardTitle';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const PerformanceChart: React.FC = () => {
  const performanceData = [
    { name: 'Jan', sales: 4000, users: 2400, orders: 1800 },
    { name: 'Feb', sales: 3000, users: 1398, orders: 2800 },
    { name: 'Mar', sales: 2000, users: 9800, orders: 3200 },
    { name: 'Apr', sales: 2780, users: 3908, orders: 2500 },
    { name: 'May', sales: 1890, users: 4800, orders: 3300 },
    { name: 'Jun', sales: 2390, users: 3800, orders: 2900 },
  ];

  return (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Line type='monotone' dataKey='sales' stroke='#8884d8' />
              <Line type='monotone' dataKey='users' stroke='#82ca9d' />
              <Line type='monotone' dataKey='orders' stroke='#ffc658' />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
