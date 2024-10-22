import React from 'react';

interface BadgeProps {
    Children: 'In progress' | 'completed' | 'skipped';
}

const StatusBadge: React.FC<BadgeProps> = ({ Children }) => {
  let styles = '';

  switch (Children) {
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

  return (
    <span className={`px-2 py-1 border ${styles} rounded-md text-sm font-medium`}>
      {Children}
    </span>
  );
};

export default StatusBadge;
