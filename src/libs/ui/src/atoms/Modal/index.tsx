// src/components/atoms/Modal/Modal.tsx
import React from 'react';
import ReactDom from 'react-dom';
import './modal.styles.css'


interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  className?: string
}

const Modal: React.FC<ModalProps> = ({ children, className }) => {

  return ReactDom.createPortal(
    <div className="modal-overlay !p-[4rem]  sm:p-2 xs:!p-4 2xs:!p-0 bg-[#00000040] z-50 h-full w-full fixed top-[0%] flex items-center transition-[hidden]  justify-center overflow-auto">
      <div
        className={`lg:!w-[650px] md:w-[400px] 2xs:w-[400px] !pt-8  h-auto bg-white relative overflow-y-auto !mt-3 ${className}`}
      >
        {children}
      </div>
    </div>,
    document.getElementById('root')!
  );
};

export default Modal;
