import React from 'react';

interface ModalBackgroundProps {
    onClick: () => void;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({ onClick }) => (
  <div className="absolute inset-0" onClick={onClick}></div>
);

export default ModalBackground;
