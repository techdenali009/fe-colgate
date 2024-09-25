// src/components/atoms/Modal/Modal.tsx
import React, { useState } from 'react';
import './modal.styles.css'


interface ModalProps {
  show: boolean;
  onClose: () => void;
  children : React.ReactNode;
  className ?: string
}

const Modal: React.FC<ModalProps> = ({ show,children,className }) => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  // Function to handle the login button click
  const handleLoginClick = () => {
    setIsLoginClicked(true);
  };

  if (!show) return null;

  return (
    <div className="modal-overlay bg-overlayBackground-100 z-50 h-full w-full fixed top-[0%] flex items-center transition-[hidden]  justify-center overflow-auto">
      <div
        className={`${
          isLoginClicked ? 'h-40.6rem' : 'h-auto'
        }  w-40.6rem bg-brand-white-100 relative overflow-y-auto !mt-3 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
