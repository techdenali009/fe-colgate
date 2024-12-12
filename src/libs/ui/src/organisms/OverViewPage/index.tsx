import CustomerServiceOverView from '@ui/molecules/CustomerServiceOverView';
import RewardTier from '@ui/molecules/RewardTier';
import React from 'react';

interface OverviewProps {
  className?: string;
}

const OverviewPage: React.FC<OverviewProps> = ({ className }) => {
  return (
    <div className={`px-[24px] py-[56px] lg:px-[0px] lg:py-[0px] lg:mt-11 lg:mb-4 space-y-8 lg:space-y-12 ${className}`}>
      <h2 className="text-[38px] font-bold text-appTheme mb-[28px]">Overview</h2>

      <div className="grid  grid-cols-1 lg:grid-cols-1">
        <RewardTier content="" customerNumber="" />
        <CustomerServiceOverView content="" className="self-start" />
      </div>
    </div>
  );
};

export default OverviewPage;
