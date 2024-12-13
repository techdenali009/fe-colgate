import PerformanceChart from '@ui/molecules/DashBoardPerformanceChart';
import RecentOrdersTable from '@ui/molecules/DashBoardRecentOrdersTable';
import StatsCards from '@ui/molecules/DashBoardStatsCards';
import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>Dashboard</h1>
      <StatsCards />
      <PerformanceChart />
      <RecentOrdersTable />
    </div>
  );
};

export default AdminDashboard;
