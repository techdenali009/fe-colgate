import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const NoImage: React.FC<ArrowPrevIconProps> = ({
  fillColor = '#010002',
  width = '64',
  height = '73',
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest} // Apply additional props to the <svg> element
    >
      <title>Group 64</title>
      <g fill={fillColor} fillRule="evenodd">
        <text
          stroke="#888"
          strokeWidth="0.3"
          fontFamily="Helvetica"
          fontSize="11px"
          transform="translate(.5)"
        >
          <tspan x="1.497" y="55">
            NO IMAGE
          </tspan>
          <tspan x="0.032" y="69">
            AVAILABLE
          </tspan>
        </text>
        <path
          d="M47.624 0H15.376C12.981 0 11 1.977 11 4.368v23.264C11 30.023 12.98 32 15.376 32h32.248C50.019 32 52 30.023 52 27.632V4.368C52 1.977 50.02 0 47.624 0ZM15.107 2h32.785C49.063 2 50 2.936 50 4.104v13.271l-7.213-5.42c-.421-.328-1.077-.328-1.451.046L29.908 22l-8.337-5.514a1.167 1.167 0 0 0-1.17-.094L13 20.084V4.103C13 2.934 13.937 2 15.108 2Zm32.785 29H15.108C13.937 31 13 30.033 13 28.825v-5.22l7.822-4.061 8.524 5.849c.187.145.421.193.655.193.281 0 .562-.097.75-.29L42.13 15 50 21.09v7.735C50 30.033 49.063 31 47.892 31ZM30 16c2.736 0 5-2.217 5-5s-2.264-5-5-5-5 2.217-5 5 2.217 5 5 5Zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Z"
          fillRule="nonzero"
        >
        </path>
      </g>
    </svg>
  );
};

export default NoImage;
