import React from 'react';

import './CarouselBlueNextArrow.styles.scss';
import ArrowNextIcon from '../SvgAtoms/ArrowNextIcon';

// Use React.forwardRef to forward the ref to the button element
const NextButton = React.forwardRef<HTMLButtonElement, { onClick?: () => void }>(
  ({ onClick }, ref) => (
    <div className='Product-detailspage'>
      <button
        ref={ref}  // Forward ref here
        onClick={onClick}
        className="nextbutton"

      >
        <ArrowNextIcon />
      </button>
    </div>
  )
);

// Ensure the displayName is set for debugging purposes
NextButton.displayName = 'NextButton';

export default NextButton;
