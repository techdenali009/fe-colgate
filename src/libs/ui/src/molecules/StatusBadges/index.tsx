import React from 'react';

interface BadgeProps {
    children: React.ReactNode; // Allow any valid React node as children
}

const StatusBadge: React.FC<BadgeProps> = ({ children }) => {
  let styles = '';

  // Check if children is one of the allowed status strings
  if (typeof children === 'string') {
    switch (children) {
      case 'In progress':
        styles = 'border-pink-500 text-red-600';
        break;
      case 'completed':
        styles = 'border-green-500 text-green-900';
        break;
      case 'skipped':
        styles = 'border-yellow-500 text-yellow-600';
        break;
      default:
        styles = 'border-gray-500 text-gray-600';
        break;
    }
  }

  return (
    <span className={`px-2 py-1 border ${styles} rounded-md text-sm font-medium`}>
      {children}
    </span>
  );
};

export default StatusBadge;
