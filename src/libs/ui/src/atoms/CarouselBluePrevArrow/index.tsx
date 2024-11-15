import React from 'react';
import './CarouselBluePrevArrow.styles.scss'; // Make sure this file has correct styles
import ArrowPrevIcon from '../SvgAtoms/ArrowPrevIcon';

interface PrevButtonProps {
  onClick?: () => void;
}

const PrevButton = React.forwardRef<HTMLButtonElement, PrevButtonProps>(({ onClick }, ref) => (
  <button
    ref={ref} // Forward ref here
    onClick={onClick}
    className='prevbutton'
  >
    <ArrowPrevIcon />
  </button>
));

PrevButton.displayName = 'PrevButton'; // For debugging in React DevTools

export default PrevButton;
