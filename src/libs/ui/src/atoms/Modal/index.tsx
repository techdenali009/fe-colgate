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

  // useEffect(() => {
  //   const root = document.getElementById('appBody')!;

  //   if (root) {
  //     root.classList.add('overflow-hidden');
  //   }

  //   return () => {

  //       root.classList.remove('overflow-scroll');

  //   };
  // }, []);
  return ReactDom.createPortal(
    <div className="modal-overlay bg-overlayBackground-100 z-50 h-full w-full fixed top-[0%] flex items-center transition-[hidden]  justify-center overflow-auto">
      <div
        className={`h-auto w-[40.6rem] max-md:w-[18.6rem] bg-brand-white-100 relative overflow-y-auto !mt-3 ${className}`}
      >
        {children}
      </div>
    </div>,
    document.getElementById('appModal')!
  );
};

export default Modal;
