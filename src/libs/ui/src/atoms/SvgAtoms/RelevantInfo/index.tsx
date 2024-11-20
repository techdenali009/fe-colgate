import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
	fillColor?: string; // Optional fillColor prop for the rect
}

const RelevantInfo: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width = '16',
  height = '16',
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
			
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <g fill={fillColor} fillRule="evenodd">
        <g fill={fillColor} fillRule="nonzero">
          <path d="M8.025 15.767a7.745 7.745 0 117.742-7.742 7.753 7.753 0 01-7.742 7.742zm0-14.363a6.622 6.622 0 10-.005 13.243 6.622 6.622 0 00.005-13.243z"></path>
          <circle cx="8.025" cy="5.387" r="1"></circle>
          <path d="M7.326 6.975h1.392v4.584H7.326z"></path>
        </g>
      </g>
    </svg>
  );
};

export default RelevantInfo;


