import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const ReviewDropClose: React.FC<ArrowPrevIconProps> = ({
  fillColor = '#FFF',
  width = '8',
  height = '10',
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg" aria-label="Remove Filter" color={fillColor} aria-hidden="true"   {...rest}>
      <title>Close</title>
      <path
        d="M1.431.002a1.585 1.585 0 00-.94 2.728l10.746 10.786L.491 24.276a1.597 1.597 0 000 2.257 1.592 1.592 0 002.253 0l10.772-10.786 10.747 10.786a1.592 1.592 0 002.253 0 1.597 1.597 0 000-2.257l-10.772-10.76L26.516 2.73A1.589 1.589 0 0025.352.002c-.41.01-.8.18-1.09.472l-10.746 10.76L2.744.474a1.584 1.584 0 00-1.14-.472 1.583 1.583 0 00-.173 0z"
        fill={fillColor}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ReviewDropClose;
