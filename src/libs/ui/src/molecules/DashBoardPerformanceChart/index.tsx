
import React from 'react';
import { Card } from '@ui/atoms/DashBoardCard';
import { CardContent } from '@ui/atoms/DashBoardCardContent';
import { CardHeader } from '@ui/atoms/DashBoardCardHeader';
import { CardTitle } from '@ui/atoms/DashBoardCardTitle';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { performanceData } from '@utils/DashBoardData';

const PerformanceChart: React.FC = () => {
  return (
    <div className='AdminPannel-DashBoard'>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                <Line type="monotone" dataKey="orders" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceChart;
