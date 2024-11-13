import AcademyIcon from '@ui/atoms/SvgAtoms/AcademyIcon';
import LoyaltyIcon from '@ui/atoms/SvgAtoms/LoyaltyIcon';
import OrderManagementtIcon from '@ui/atoms/SvgAtoms/OrderManagementtIcon';
import SubscribeIcon from '@ui/atoms/SvgAtoms/SubscribeIcon';
import React from 'react';

interface IconDisplayProps {
  heading: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ heading }) => {
  const renderIcon = () => {
    switch (heading) {
    case 'Loyalty':
      return <LoyaltyIcon />;
    case 'Order Management':
      return <OrderManagementtIcon />;
    case 'Academy':
      return <AcademyIcon />;
    case 'Subscriptions':
      return <SubscribeIcon />;
    default:
      return null;
    }
  };

  return (
    <div className="icon-container">
     
      {renderIcon()}
    </div>
  );
};

export default IconDisplay;
