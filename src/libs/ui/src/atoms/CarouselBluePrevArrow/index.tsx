import React from 'react';
import './CarouselBluePrevArrow.styles.scss';
import ArrowPrevIcon from '../SvgAtoms/ArrowPrevIcon';

interface PrevButtonProps {
  onClick: () => void;
}

const PrevButton: React.FC<PrevButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="prevbutton"
    style={{
      position: 'absolute',
      top: '40%',
      left: '2px',
      zIndex: 10,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    <ArrowPrevIcon/>
  </button>
);

export default PrevButton;
