import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const RightArrow: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width='20',
  height='16',
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.7992 15.0335L11.9992 14.2663L17.6992 8.5335H0.132812V7.3999H17.6992L11.9992 1.6663L12.7992 0.899902L19.8656 7.9663L12.7992 15.0335Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default RightArrow;
