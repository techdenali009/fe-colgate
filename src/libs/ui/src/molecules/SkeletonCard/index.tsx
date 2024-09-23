import React from 'react';

interface SkeletonProps {
    className?: string; // Additional custom classes for the outer div
    width?: string; // Width for the skeleton
    height?: string; // Height for the skeleton
    shape?: 'rectangle' | 'circle'; // Shape of the skeleton
}

const Skeleton: React.FC<SkeletonProps> = ({
    className = '',
    width = '100%', // Default width
    height = '1rem', // Default height
    shape = 'rectangle', // Default shape
}) => {
    const baseClass = 'bg-gray-300 animate-pulse';

    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-md';

    return (
        <div
            className={`${baseClass} ${shapeClass} ${className}`}
            style={{ width, height }}
        />
    );
};

export default Skeleton;