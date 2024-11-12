import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const LoyaltyIcon: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width='104',
  height='104',
  ...rest
}) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 1664 1664"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path transform="translate(0)" d="m0 0h1664v1664h-1664z" fill="#FCFDFD" />
      <path
        transform="translate(811,173)"
        d="m0 0h43l31 2 38 5 36 7 39 9 30 9 32 11 37 15 26 12 19 10 21 12 23 14 11 8 18 13 14 10 12 10 10 8 14 12 10 9 11 9 29 29 7 8 12 14 13 16 15 20 11 15 10 15 16 26 8 14 12 22 12 26 13 30 10 27 12 36 6 24 8 38 4 25 3 28 1 16v89l-3 36-5 34-8 39-8 29-9 29-15 41-16 36-18 35-14 23-14 22-14 18-13 18-13 16-11 14-11 11-7 8-8 7-7 8-25 25-25 20-15 11-15 12-13 9-19 12-18 11-24 13-17 9-24 11-32 13-28 10-42 13-40 9-27 5-40 5-13 1-27 1h-44l-33-2-37-5-44-8-25-6-29-9-30-10-33-13-27-12-17-8-21-12-11-6-20-13-25-17-13-10-10-8-13-11-11-9-13-12-8-7-13-12-16-16-7-8-12-14-12-13-11-14-15-20-11-16-18-27-16-27-19-37-14-34-15-42-7-24-8-31-9-47-5-35-3-34v-52l3-37 5-38 8-42 8-32 10-33 16-42 18-40 15-29 16-27 13-20 11-16 12-17 14-17 9-11 12-14 11-12 7-8 12-12 7-8 13-12 15-13 14-11 15-12 20-14 22-15 13-8 25-14 10-6 19-9 9-4 10-5 14-6 34-13 33-11 36-9 42-9 37-6 31-3z"
        fill="#FCFDFD"
      />
      <path
        transform="translate(469,528)"
        d="m0 0h580l183 1 24 1 19 2 8 3 9 7 4 5 9 19 1 5 1 29 1 78v309l-1 65-2 30-3 16-5 14-5 5-8 4-9 3-14 2-63 1h-682l-74-1-37-1-23-3-10-3-6-4-7-8-3-7-2-17-1-19-1-38-1-93v-60l1-227 1-52 1-19 3-17 8-16 5-5 12-5 11-2 13-1z"
        fill="#FCFDFD"
      />
      <path
        transform="translate(523,641)"
        d="m0 0h14l17 3 12 4 17 9 14 11 11 9 14 14 9 6 11-13 7-8 8-7 13-9 21-11 17-6 5-1h25l15 3 19 7 14 8 13 10 10 10 10 14 8 16 5 13 4 18v23l-5 21-8 16-7 11-11 14-8 8-7 8-101 101-7 8-34 34-11 14-4 6-4-2-12-11-16-15-13-13v-2l-4-2v-2l-4-2-7-8-81-81-8-7-19-19-7-8-13-15-9-13-8-16-6-20-2-12 1-26 4-16 5-11 6-11 8-10 13-13 15-11 16-8 14-6 13-3z"
        fill={fillColor}
      />
      <path
        transform="translate(798,161)"
        d="m0 0h64l26 2 32 4 37 6 34 7 37 10 36 12 31 12 29 13 19 10 11 6 15 8 13 8 11 7 16 10 8 6 14 10 21 16 13 10 14 12 12 11 8 7 7 7 8 7v2h2l7 8 10 10 7 8 9 10 11 14 14 19 11 16 10 15 15 25 12 22 8 15 13 28 9 19 13 32 13 40 4 12 8 37 6 31 4 31 2 22 1 19v75l-2 31-4 29-8 42-6 25-10 36-9 27-14 37-8 19-20 40-11 19-9 14-10 15-13 18-10 14-11 13-8 10-11 13-11 12-41 41-8 7-14 12-11 9-21 16-12 8-19 13-15 10-7 5-9 5-21 12-19 10-23 11-15 6-27 11-34 11-29 8-26 6-35 6-15 3-41 5-38 2h-48l-31-2-26-3-59-11-31-8-32-10-40-14-26-11-22-10-16-8-28-15-18-11-18-12-18-13-11-8-11-9-10-9-11-9-16-15-10-9-13-12-12-13-10-11-7-8-12-14-11-14-14-19-18-26-10-16-8-13-11-20-8-16-10-19-14-34-15-42-10-35-7-28-7-38-5-32-3-27-1-21v-40l2-39 4-32 6-34 7-32 6-23 9-31 10-28 11-29 8-19 7-15 13-25 14-24 9-15 8-11 10-15 10-14 9-12 9-11 12-14 7-8 8-10 9-10 25-25 14-11 11-10 11-9 8-7 9-7 12-9 27-18 17-11 21-12 23-13 23-11 23-10 28-11 36-12 28-8 28-7 32-6 38-6zm13 12-39 3-35 5-45 9-22 5-18 5-26 8-30 11-19 8-10 4-13 6-19 9-9 5-23 13-14 8-16 10-11 8-20 14-13 10-16 13-13 11-10 9-13 12-9 10-11 11-7 8-9 10-11 14-9 10-11 14-10 14-13 19-11 17-16 26-8 16-12 23-16 36-17 46-12 42-8 37-6 36-4 35-2 26v52l3 34 6 40 8 42 9 35 8 26 14 39 15 35 9 17 8 16 17 29 17 25 12 17 14 19 14 17 12 13 9 11 16 17 15 15 8 7 13 12 11 9 15 13 14 11 16 12 21 14 20 13 16 9 18 10 28 13 24 10 37 14 38 12 23 6 41 8 40 6 20 2 22 1h44l27-1 31-3 34-5 43-9 29-8 40-13 33-13 23-10 40-20 23-13 34-22 17-13 10-8 11-8 14-11 14-12 42-42 7-8 10-11 11-14 12-15 7-10 10-13 10-14 24-39 10-20 10-19 15-34 14-39 12-39 7-28 7-36 5-37 2-27v-89l-2-26-4-31-7-36-6-27-9-30-12-34-13-31-15-32-8-16-12-22-12-19-11-17-12-17-16-21-11-14-13-15-7-8-11-12-23-23-11-9-11-10-11-9-12-10-10-8-36-26-15-10-29-17-22-12-28-13-34-14-25-9-31-10-23-6-46-10-30-5-25-3-31-2z"
        fill="#242129"
      />
      <path
        transform="translate(469,528)"
        d="m0 0h580l183 1 24 1 19 2 8 3 9 7 4 5 9 19 1 5 1 29 1 78v309l-1 65-2 30-3 16-5 14-5 5-8 4-9 3-14 2-63 1h-682l-74-1-37-1-23-3-10-3-6-4-7-8-3-7-2-17-1-19-1-38-1-93v-60l1-227 1-52 1-19 3-17 8-16 5-5 12-5 11-2 13-1zm287 14-335 1-26 1-12 2-8 5-4 7-1 4-2 38-1 36-1 161v216l1 46 2 31 2 10 5 5 4 1h885l15-1 5-6 3-7 1-5v-300l-1-215-2-12-5-8-5-5-7-2-23-2-32-1z"
        fill="#737782"
      />
      <path
        transform="translate(928,169)"
        d="m0 0 11 1 28 5 28 6 36 10 33 11 31 12 29 13 19 10 11 6 15 8 13 8 11 7 16 10 8 6 14 10 21 16 13 10 14 12 12 11 8 7 7 7 8 7v2h2l7 8 10 10 7 8 9 10 11 14 14 19 11 16 10 15 15 25 12 22 8 15 13 28 9 19 13 32 13 40 4 12 8 37 6 31 4 31 2 22 1 19v75l-2 31-4 29-8 42-6 25-10 36-9 27-14 37-8 19-20 40-11 19-9 14-10 15-13 18-10 14-11 13-8 10-11 13-7 8-1-4 3-3v-3l-2 3h-2l-4 4-5 3-4 5h-2v2l-9 4-6 2v2h-2v2h-2l-1 2v-3l6-7 8-7 15-16 12-14 13-17 9-12 13-17 10-14 24-39 10-20 10-19 15-34 14-39 12-39 7-28 7-36 5-37 2-27v-89l-2-26-4-31-7-36-6-27-9-30-12-34-13-31-15-32-8-16-12-22-12-19-11-17-12-17-16-21-11-14-13-15-7-8-11-12-22-22-11-9-11-10-11-9-12-10-10-8-36-26-15-10-29-17-22-12-28-13-34-14-25-9-31-10-23-6-32-7 3-3 5-1-2-4-7 1-9-3-5-2-9-1-2-2z"
        fill="#242129"
      />
      <path
        transform="translate(475,529)"
        d="m0 0h545l169 1 3 2 8 1 20 1 32 4v1l-12 1h-24l-2 1-715 1-86 1-26 1v2l-10 4-5 8-1 4-2 38-1 36-1 161v216l1 46 2 31 2 10 1 3 3 1 7 11 1 4h-9l-7-2-7-7-5-10-2-17-1-19-1-38-1-93v-60l1-227 1-52 1-19 3-17 8-16 5-5 12-5 4-1 22-1z"
        fill="#26232B"
      />
      <path
        transform="translate(625,1111)"
        d="m0 0 6 1 15-1h174l8 1 4-1 5 1h76l7 1h50l7 1 6-1 21 1 10-1h16l2 1 4-1h14l2 1 4-1h18l37 1 24 1h11l15 3h11l6 1 25 1 35 1h19l19-1 7-2 7-1-3 3-12 4-14 2-63 1h-682l-74-1-37-1-23-3-5-1v-1h19l24-1v-2l13-3 22-1 5-1 46 1 17 1h12l2-1h21l8-1h47z"
        fill="#80848D"
      />
      <path
        transform="translate(1301,1068)"
        d="m0 0 3 3-1 16-4 20-4 8-3 2-9 2-7 2-24 1h-16l-40-1-21-1-7-1h-8l-8-2-7-1h-16l-27-1-35-1h-12l-4 1-5-1h-11l-4 1-4-1h-18l-6 1-21-1-10 1-6-1h-51l-6-1h-74l-4-1-4 1-8-1h-174l-15 1-5-1-21 1h-39l-10 1h-19l-5 1h-12l-21-1-39-1-8 1-20 1-11 2v2l-3 1-31 1-12-1-2-2 12 1-5-9-3-5h889l15-1 5-4 4-11 3-12 4 3 3-6z"
        fill="#727682"
      />
      <path
        transform="translate(798,161)"
        d="m0 0h64l26 2 32 4 7 1 4 3-2 1 5 1 9 2 5 3 10 1h2l3 4-5 2v1h-9l-32-6-32-4-31-2h-43l-39 3-35 5-45 9-22 5-18 5-26 8-30 11-19 8-10 4-13 6-19 9-9 5-23 13-14 8-16 10-11 8-20 14-13 10-16 13-13 11-9 8h-3l-2-4h3l1-4 1-2-11 8-9 8h-2l-2 4-4 4h-2l-2 4-6 5-6 7-5 4-3-2 3-6 31-31 14-11 11-10 11-9 8-7 9-7 12-9 27-18 17-11 21-12 23-13 23-11 23-10 28-11 36-12 28-8 28-7 32-6 38-6z"
        fill="#0F0D11"
      />
      <path
        transform="translate(1334,1271)"
        d="m0 0 1 4-3 4-2 5-43 43-8 7-14 12-11 9-21 16-12 8-19 13-15 10-7 5-9 5-21 12-19 10-23 11-15 6-27 11-34 11-29 8-26 6-35 6-15 3-41 5-15 1h-60l1-2-6-3 3-2 39-1 12-1v-2l3-1 23-2 13-2 37-5 40-8 28-7 47-15 26-10 31-13 42-21 23-13 34-22 17-13 10-8 11-8 14-11 14-12 20-20 5-1v-2h2v-2h2l1-2 7-3 5-1v-2l8-8h3l1-3z"
        fill="#232028"
      />
      <path
        transform="translate(778,928)"
        d="m0 0h43l12 1 4 3 2 3 2 1-2 5-1 9 3-3 6-11 4-5 8-2 16-1 8 2 5 6 3 9-2 24-2 10-4 8-9 3-10 1h-70l-8-4-3-6-8-33-4-13 1-5z"
        fill={fillColor}

      />
      <path
        transform="translate(936,929)"
        d="m0 0h18l10 2-3 5-2 2-7 3-3 3v5l1 2-3 8-3 3-1 7 4-2 5-5 8-9 3-5-1-7 4-1 3 4 6-1 1-5 3-7 4-2h29l-1 4-2 4h6l2 7 3 8v9l-1 9v2l-7-1-1-1-1 4h6l-3 9-8 7-2 1h-18l-4-11-4-15-5-10h-4l-5 8-6 15-6 8-10 4h-6l-1-3-1-17-4-18v-9l2-11z"
        fill={fillColor}
      />
      <path
        transform="translate(962,529)"
        d="m0 0h58l169 1 3 2 8 1 20 1 32 4v1l-12 1h-24l-2 1h-223l-95-2-1-2 7-2 4-2h4v-3z"
        fill="#060407"
      />
      <path
        transform="translate(469,528)"
        d="m0 0h580l183 1 24 1 19 2 8 3 9 7 4 5 8 16v8h-3l-4-4-1 1-7-1-2-4v-3h-2l-5-8-4-4-7-2-23-2-32-1h-458l-335 1-34 1v-1l7-1 19-1 86-1 715-1 2-1h30l2-1-22-2-6-1-23-1-10-2v-1l-167-1h-545l-82 1v-1l13-1z"
        fill="#55565F"
      />
      <path
        transform="translate(1164,927)"
        d="m0 0h7l7 2 2 2v11l-1 13 1 12v20l-2 4-16 1-33-2-7-1-2-6-3-15-5 2-9 5-16 2 1-6 6-10 11-12 5-7 5-10 4-3h9l5 5 3 15 2 8 3 18 3 6 4 1 15-3 3-2 1-3v-9l-3-6-10-7-2-3 1-10 4-8z"
        fill={fillColor}
      />
      <path
        transform="translate(1286,560)"
        d="m0 0 2 3 4 15 1 1v5l4 1 2 10v28l-1 5 2 3-1 9v23l-1 4 2 2-1 8 1 7h-2l2 3v54l-3 17-1 17-2 57v12l-1 24-1 27v64l-1 103-1 27-4 11-2 1 3-9 1-5v-300l-1-215z"
        fill="#80848D"
      />
      <path
        transform="translate(1334,1271)"
        d="m0 0 1 4-3 4-2 5-43 43-8 7-14 12-11 9-21 16-12 8-19 13-15 10-7 5-9 5-21 12-8 4-4-1 1-5 5-2 3-3 16-8 7-4-12 3v-2l-2-1 4-4 16-9 23-15 9-6 16-12 10-8 11-8 14-11 14-12 20-20 5-1v-2h2v-2h2l1-2 7-3 5-1v-2l8-8h3l1-3z"
        fill="#0C0A0D"
      />
      <path
        transform="translate(1283,1101)"
        d="m0 0v3l-2 2-8 1-44 1-208 1h-67l-246-1h-320l-8-1v-1l264-1h621l15-1z"
        fill="#80848D"
      />
      <path
        transform="translate(429,783)"
        d="m0 0 3 4 3 5 2 2v3l4 2v3l3 1 7 10 2 1 2 4 2 1v3l4 1 5 6v2l3 1v2l4 2 4 4 1 3 10 10 1 3 3 1 5 6 8 7v2l4 2 7 6 6 7 3 1 5 6 4 4v2h3l1 4h3l5 6 7 6 5 6v2h3l5 6v2l4 2v2l4 2v2h2l7 8 5 4v3l4 2 4 4v2l4 2 16 16v2l3-1v2h2l4 6 3 1v7l-2 1-5-3-9-9-8-7-16-16v-2l-4-2v-2l-4-2-7-8-81-81-8-7-19-19-7-8-13-15-9-13-7-14z"
        fill={fillColor}
      />
      <path
        transform="translate(971,1474)"
        d="m0 0h7l4 2 7-2 4 1 4 2-7 4-1 2-7 3-21 4-19 3-15 3-41 5-15 1h-60l1-2-6-3 3-2 39-1 12-1v-2l3-1 23-2 13-2 37-5z"
        fill="#0C0A0E"
      />
      <path
        transform="translate(1223,928)"
        d="m0 0 5 1 5 5 2 5-1 7-2 1 1 5 7 8 5 9-1 6-7 8-8 6-8 2h-8l-5-3-5-8-2-6v-7l3-11 5-12 8-11z"
        fill={fillColor}
      />
      <path
        transform="translate(1028,928)"
        d="m0 0h18l21 1 1 3-15 30-10 25-3 3h-18l2-10 3-7 12-6 1-2v-19l-3-5-14-6v-3l3-3z"
        fill={fillColor}
      />
      <path
        transform="translate(778,928)"
        d="m0 0h17v2h5l1 4-3 11v21l2 7v6l4 1 3 1 2 3 5 1 3 3v1h-28l-5-5-6-24-7-25 1-5z"
        fill={fillColor}
      />
      <path
        transform="translate(882,943)"
        d="m0 0 3 1 1 2v19l-3 9-2 2-1 7v3l-2 3-4 1h-53l-3-2 1-6-4-1 1-3 6-1 1-6-1-2 4-7 4 4 4 6 4 4 10 2 11-4 6-5 5-2 6-7 4-16z"
        fill={fillColor}
      />
      <path
        transform="translate(1164,927)"
        d="m0 0h7l7 2 2 2v11l-1 13v30h-2l-1 4-7 2-12-1-1-5 3-3h3l1-3 3-2 1-3v-9l-3-6-10-7-2-3 1-10 4-8z"
        fill={fillColor}
      />
      <path
        transform="translate(861,940)"
        d="m0 0h9l5 2 1 2v14l-3 5-11 10-10 5-6 1-9-3-5-5v-8l6-9 10-3 2-5 8-5z"
        fill={fillColor}
      />
      <path
        transform="translate(1119,929)"
        d="m0 0h9l5 5v12l-8 6-1 2h-2l-2 5-5 9-9 6-7 2-12 1 1-6 6-10 11-12 5-7 5-10z"
        fill={fillColor}
      />
      <path
        transform="translate(801,939)"
        d="m0 0 11 2 14 4 3 3v7l-7 11-5 9-5 5h-6l-6-5-3-9v-21l2-5z"
        fill={fillColor}
      />
      <path
        transform="translate(870,928)"
        d="m0 0 11 1 6 5 4 11-2 24-2 10-4 8-5 1 2-3-1-2 1-8 3-3 2-7v-19l-1-2h-4l-3 16-7 8h-3l7-7 1-3v-16l-5-1h-9l-8 4-8 8-9 3v-19l-1-6 2 1 2 3 2 1-2 5-1 9 3-3 6-11 4-5 8-2z"
        fill={fillColor}
      />
      <path
        transform="translate(1301,1068)"
        d="m0 0 3 3-1 16-4 20-4 8-3 2-9 2h-10l-3-2h2l2-5 5-6 5-5 4-8 4-16 4 3 3-6z"
        fill="#201C24"
      />
      <path
        transform="translate(434,800)"
        d="m0 0h2l9 13 9 10 12 13 4 5 2 4 6 5 6 7 4 4 7 4 78 78 7 8 10 10v3l4 2 10 10v2l4 2v2l4 2 12 12-1 2-11-11-8-7-16-16v-2l-4-2v-2l-4-2-7-8-81-81-8-7-19-19-7-8-13-15-9-13z"
        fill={fillColor}
      />
      <path
        transform="translate(1234,956)"
        d="m0 0 6 4 5 9-1 6-7 8-8 6-8 2h-8l-5-3-5-8 1-13 2-1 6 1 2 5v7l5-1h11l2-4 3-1z"
        fill={fillColor}
      />
      <path
        transform="translate(936,929)"
        d="m0 0h18l10 2-3 5-2 2-11 2-5 5-2 5-2 10-5 1-5-9v-9l2-11z"
        fill={fillColor}
      />
      <path
        transform="translate(882,943)"
        d="m0 0 3 1 1 2v19l-3 9-2 2v3l-5 2h-12l-2-4v-5l3-3 5-2 6-7 4-16z"
        fill={fillColor}
      />
      <path
        transform="translate(1006,937)"
        d="m0 0h1l2 16v8l-2 6-9-1-5-5-3-11v-8l1-2z"
        fill={fillColor}
      />
      <path
        transform="translate(951,938)"
        d="m0 0 4 1-6 5v5l1 2-3 8-3 3-1 7 2 2-2 4v9l1 2 3 2-6 2h-6l-1-3-1-17-3-16 2 1 2 5h5l1-10 4-8z"
        fill={fillColor}
      />
      <path
        transform="translate(826,962)"
        d="m0 0 4 4 4 6 4 4 6 3 1 7-4 3h-21l-2-1 1-6-4-1 1-3 6-1 1-6-1-2z"
        fill={fillColor}
      />
      <path
        transform="translate(965,949)"
        d="m0 0h2v8l-4 6-6 15-6 8-2 1h-6l-1-3v-9l5-8 5-5 8-9z"
        fill={fillColor}
      />
      <path
        transform="translate(1223,928)"
        d="m0 0 5 1 5 5 2 5-1 7-7 6-6 1-1-9h-3l-4 4-3-1 4-10 6-7z"
        fill={fillColor}
      />
      <path
        transform="translate(475,1384)"
        d="m0 0 4 1 20 13 16 9 20 11 6 6-2 1-9-3-19-10-5-3-12-7-5-4-6-3-2-4h-3l-1-3-2-1z"
        fill={fillColor}
      />
      <path
        transform="translate(1133,950)"
        d="m0 0 3 1 2 17v5l-3 2-2 13h-9l-1-3 2-16 2-10 4-8z"
        fill={fillColor}
      />
      <path
        transform="translate(560,1441)"
        d="m0 0 7 1 13 6 18 6 7 3 5 1 2 2 9 2-4 4-8-1-33-12-16-7-2-3h2z"
        fill="#121014"
      />
      <path
        transform="translate(1168,254)"
        d="m0 0h6l13 8 7 5 7 4 13 9 6 4 1 5 3 4-5-2-3-3-3-1v-2l-6-2-8-6-5-3-7-5-10-6v-2l-5-1-4-5z"
        fill="#100E12"
      />
      <path
        transform="translate(1179,967)"
        d="m0 0h1v20l-2 4-16 1-33-2v-1l5-1 1-9 3-4 1-5h1l3 10 2 2 17-2v2l-5 1v6l12 1 7-2 1-3h2z"
        fill={fillColor}
      />
      <path
        transform="translate(1226,953)"
        d="m0 0 4 2 4 8v9l-3 4-9-1-5-4 1-8 4-6z"
        fill="#FDFEFE"
      />
      <path
        transform="translate(1119,929)"
        d="m0 0h9l2 2-2 1-1 3h-2l-1 5-1 2h-2v2l-7 7h-7l-13 13v-3l11-12 5-7 5-10z"
        fill={fillColor}
      />
      <path
        transform="translate(978,933)"
        d="m0 0h1v31l3 10v6h-1l-4-15-5-10h-5v-6l-6 4 2-7-1-5 4-1 3 4 6-1 1-5z"
        fill={fillColor}
      />
      <path
        transform="translate(821,970)"
        d="m0 0 3 1-1 7-7 1-1 2 4 1 1 4h-2v2l3 1 43 1v1h-70l-3-2 25-1v-2l-7-1-2-4-7-1-1-2 2-3 5 4h6l3-1 2-4z"
        fill={fillColor}
      />
      <path
        transform="translate(1017,947)"
        d="m0 0 2 2 1 3v9l-1 9v2l-7-1-1-1-1 4h6l-3 9-8 7-2 1h-18v-1l15-1 5-3 2-7-1-10-7-2 2-1h6l1-5 2 4 6 1 1-5z"
        fill={fillColor}
      />
      <path
        transform="translate(1034,970)"
        d="m0 0h5v16l-1 2-5 1h-9l1-5 2-11z"
        fill={fillColor}
      />
      <path
        transform="translate(796,670)"
        d="m0 0 4 1 9 9 10 14 9 18v6l-4-4-11-20-4-5-7-9-1-3-4-2z"
        fill={fillColor}
      />
      <path
        transform="translate(1011,939)"
        d="m0 0 2 1v4h4l1 7v10l-2 5h-6l-1-1v-24z"
        fill={fillColor}
      />
      <path
        transform="translate(882,943)"
        d="m0 0 3 1 1 2v19l-3 9-2 2-1 3-1-6 1-1v-7l-1-3-2-1 1-11 2-6z"
        fill={fillColor}
      />
      <path
        transform="translate(478,656)"
        d="m0 0h5l-5 5-9 5-5 5-3 1-2 4-4 4h-2v2l-7 4-3 3-1-4 15-15 15-11z"
        fill={fillColor}
      />
      <path
        transform="translate(434,800)"
        d="m0 0h2l9 13 9 10 12 13 4 5 2 4 6 5 6 7 6 5 2 4-4-2-23-23-7-8-13-15-9-13z"
        fill={fillColor}
      />
      <path
        transform="translate(961,956)"
        d="m0 0 2 4-2 9-3 7-5 1-7-1-1-4z"
        fill={fillColor}
      />
      <path
        transform="translate(1125,1430)"
        d="m0 0 5 2-2 1v2l-16 8-15 6-7 2-2-1 3-1 1-2h4l2-4h9l1-4 5-1v-3l8-4z"
        fill={fillColor}
      />
      <path
        transform="translate(860,973)"
        d="m0 0h2l2 7h12l4-1 1 6-3 2h-13l-4-4-6-2-4-2 5-4z"
        fill={fillColor}
      />
      <path
        transform="translate(1030,929)"
        d="m0 0h14v3h-2l1 5 1 7v3h-2v-2l-3-1-7-7-3-1v-6z"
        fill={fillColor}
      />
      <path
        transform="translate(943,942)"
        d="m0 0v3l-2 5-2 10-5 1-5-9v-9h1l2 7 2-1 3-5z"
        fill={fillColor}
      />
      <path
        transform="translate(793,953)"
        d="m0 0h2l2 19 2 4-3 3h-3l-3-6v-8z"
        fill={fillColor}
      />
      <path
        transform="translate(1006,969)"
        d="m0 0 2 4v6l-3 8-5 3h-8l4-2 1-3h2l1-7 2-4 2-1z"
        fill={fillColor}
      />
      <path
        transform="translate(580,954)"
        d="m0 0 4 1 6 6v3l4 2 10 10v2l4 2v2l4 2 12 12-1 2-11-11-8-7-16-16v-2l-4-2v-2l-4-2z"
        fill={fillColor}
      />
      <path
        transform="translate(624,1464)"
        d="m0 0 9 2v2l-2 1 8-1 7 2-1 3-4 1-10-2-12-4-1-2z"
        fill={fillColor}
      />
      <path
        transform="translate(1216,539)"
        d="m0 0h25l5 1v2h-59v-1l27-1z"
        fill="#1A171E"
      />
      <path
        transform="translate(1179,967)"
        d="m0 0h1v20l-2 4-16 1-10-1-1-5 6-5 5-1v2l-5 1v6l12 1 7-2 1-3h2z"
        fill={fillColor}
      />
      <path
        transform="translate(950,940)"
        d="m0 0 2 1-3 3v5l1 2-3 8-3 3-1 7 2 2-4-1 1-17 2-6h2l2-5z"
        fill={fillColor}
      />
      <path
        transform="translate(965,949)"
        d="m0 0h2v8l-4 6-2-6-15 15-1-3 5-6 8-7 5-5z"
        fill={fillColor}
      />
      <path
        transform="translate(1293,1300)"
        d="m0 0 1 3-1 2-5 3-3 6-4 4h-2l-2 4-4 4h-2l-1-3z"
        fill={fillColor}
      />
      <path
        transform="translate(1136,951)"
        d="m0 0h1l2 14v10l-3 4-1 9-1 1h-12v-8l2-3v9l9 1v-9l2-5 3-1-2-13z"
        fill={fillColor}
      />
      <path
        transform="translate(835,931)"
        d="m0 0 2 1 2 3 2 1-2 5-1 9 3-3 2-4 1 2-2 6 5-1 1-3 1 2-4 4-9 3v-19z"
        fill={fillColor}
      />
      <path
        transform="translate(1178,943)"
        d="m0 0h1v17l-2-3-1 2-5-1-1-4 3-7h4z"
        fill={fillColor}
      />
      <path
        transform="translate(1e3 936)"
        d="m0 0 10 1 1 1v6h-3l-2-4-1 1-1 12h-1l-2-15-11 2h-4l1-3z"
        fill={fillColor}
      />
      <path
        transform="translate(1028,928)"
        d="m0 0h18l17 1v1h-33l-1 6 4 1-2 1-9-4 2-4z"
        fill={fillColor}
      />
      <path
        transform="translate(1164,927)"
        d="m0 0h7l7 2-3 1h-2l-1 2h-3v2l-3 1-1-5-1 2-5 1-4 3 2-5z"
        fill={fillColor}
      />
      <path
        transform="translate(1230,948)"
        d="m0 0 4 5 3 3-1 2-1-1v16l-2-1v-9l-5-9-4 1v-3l5-1z"
        fill={fillColor}
      />
      <path
        transform="translate(664,1476)"
        d="m0 0 9 2v2h-2v2h-7l-7-2v-2z"
        fill={fillColor}
      />
      <path
        transform="translate(866,931)"
        d="m0 0 3 4-3 2-9 2-2-2v-3z"
        fill={fillColor}
      />
      <path
        transform="translate(544,1434)"
        d="m0 0 7 2 5 3-2 1v2l-6-1-6-3v-2h2z"
        fill={fillColor}
      />
      <path
        transform="translate(1212,280)"
        d="m0 0 5 2 3 2 1 5 3 4-5-2-3-3-3-1v-2l-2-1z"
        fill={fillColor}
      />
      <path
        transform="translate(1204,1374)"
        d="m0 0 2 1 1 2-4 1-2 3h-4v3l-6 2-4-1z"
        fill={fillColor}
      />
      <path
        transform="translate(636,1468)"
        d="m0 0 10 2-1 3-4 1-10-2-1-2z"
        fill={fillColor}
      />
      <path
        transform="translate(1234,956)"
        d="m0 0 6 4 2 5h-3l-2 3-1 5h-1z"
        fill={fillColor}
      />
      <path
        transform="translate(957,1477)"
        d="m0 0 4 1-4 2v1l-10 1-3 1-1 1h-5l-2-3z"
        fill={fillColor}
      />
      <path
        transform="translate(649,1472)"
        d="m0 0 10 2v2l-5 2-10-2v-2h5z"
        fill={fillColor}
      />
      <path
        transform="translate(1202,286)"
        d="m0 0 5 2 5 6 1 3-5-1-5-4-1-3z"
        fill={fillColor}
      />
      <path
        transform="translate(545,1424)"
        d="m0 0 5 1 2 1v3h2v2l-7-1-5-3v-2z"
        fill={fillColor}
      />
      <path
        transform="translate(965,949)"
        d="m0 0h2v8l-4 6-1-3-1-7z"
        fill={fillColor}
      />
      <path
        transform="translate(1011,939)"
        d="m0 0 2 1v4h4v3l-7 1-1 4v-11z"
        fill={fillColor}
      />
      <path
        transform="translate(1178,930)"
        d="m0 0 2 1v11l-3 5-5 1 2-6 4-1z"
        fill={fillColor}
      />
      <path
        transform="translate(1097,1443)"
        d="m0 0 5 1 3 2-9 4-8 1 1-2h2l1-2h4z"
        fill={fillColor}
      />
      <path
        transform="translate(604,978)"
        d="m0 0 4 2v2l4 2 12 12-1 2-11-11-8-7z"
        fill={fillColor}
      />
      <path
        transform="translate(797,942)"
        d="m0 0 1 3v21l2 9-4-3v-29z"
        fill={fillColor}
      />
      <path
        transform="translate(685,652)"
        d="m0 0 4 1-1 2-5 2-1 2-5 2-3-1 5-5z"
        fill={fillColor}
      />
      <path
        transform="translate(1043,949)"
        d="m0 0 4 1 1 2-1 8-2 1v-2h-2z"
        fill={fillColor}
      />
      <path
        transform="translate(458,829)"
        d="m0 0 7 6 5 6h-3l-10-9z"
        fill={fillColor}
      />
      <path
        transform="translate(1010,974)"
        d="m0 0h6l-3 9-6 6-2-1 6-6v-5z"
        fill={fillColor}
      />
      <path
        transform="translate(434,800)"
        d="m0 0h2l9 13 1 5-5-5-7-11z"
        fill={fillColor}
      />
      <path
        transform="translate(1143,241)"
        d="m0 0h7l6 3-1 3-5-1-6-3z"
        fill={fillColor}
      />
      <path
        transform="translate(1017,965)"
        d="m0 0h1l1 7-7-1-1-1-2 4-1-6h8z"
        fill={fillColor}
      />
      <path
        transform="translate(958,930)"
        d="m0 0 6 1-3 5-2 2h-4l2-4z"
        fill={fillColor}
      />
      <path
        transform="translate(580,954)"
        d="m0 0 4 1 6 6 1 5-3-2v-2l-4-2v-2l-4-2z"
        fill={fillColor}
      />
      <path
        transform="translate(680,1480)"
        d="m0 0 3 1 1 4h-8l-4-1v-2z"
        fill={fillColor}
      />
      <path
        transform="translate(1104,950)"
        d="m0 0 3 1-13 13v-3z"
        fill={fillColor}
      />
      <path
        transform="translate(1133,940)"
        d="m0 0h1l2 11-6 1-1-4 4-2z"
        fill={fillColor}
      />
      <path
        transform="translate(1132,1427)"
        d="m0 0 9 1-4 3-6 1z"
        fill={fillColor}
      />
      <path
        transform="translate(414,1353)"
        d="m0 0h2v2l4 2v3l-4 1-3-3v-2h2z"
        fill={fillColor}
      />
      <path
        transform="translate(1143,981)"
        d="m0 0 5 1 9-1-4 2h-4l-1 3h-4z"
        fill={fillColor}
      />
      <path
        transform="translate(963,940)"
        d="m0 0h3l3 5-3 1-2 2-2-4z"
        fill={fillColor}
      />
      <path
        transform="translate(1206,275)"
        d="m0 0 7 4-1 3 1 2-4-2-3-3z"
        fill={fillColor}
      />
      <path
        transform="translate(1271,330)"
        d="m0 0 7 4 6 6-1 2-6-5v-2l-5-2z"
        fill={fillColor}
      />
      <path
        transform="translate(899,1486)"
        d="m0 0h5l-4 1v2l-7 1-3-3z"
        fill={fillColor}
      />
      <path
        transform="translate(971,1474)"
        d="m0 0 3 1 1 2-8 1-5-1v-1z"
        fill={fillColor}
      />
    </svg>
  );
};

export default LoyaltyIcon;
