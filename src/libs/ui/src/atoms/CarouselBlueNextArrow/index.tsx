import React from 'react';

import './CarouselBlueNextArrow.styles.scss';
import ArrowNextIcon from '../SvgAtoms/ArrowNextIcon';

interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="nextbutton"
    style={{
      position: 'absolute',
      top: '40%',
      right: '2px',
      zIndex: 10,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    <ArrowNextIcon/>
  </button>
);

export default NextButton;
