import React from 'react';
import closeIcon from '../../../assets/close-icon.svg';
import straightArrow from '../../../assets/straightArrow.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode; // Title can accept nodes like JSX elements
  children: React.ReactNode; // Content inside the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  bg-black bg-opacity-50 h-[91%]">
      <div className="bg-white  w-full shadow-lg  dark:bg-appModalColor  max-h-[114vh] overflow-hidden"> {/* Constrained height */}
        <div className="flex justify-between items-center pl-[13px] p-4 !pt-[80px] ">
          <button onClick={onClose} className="text-gray-500">
            {/* Back Arrow Icon (can be replaced with an SVG or library icon) */}
            <img src={straightArrow} alt="straightArrow" className="" />
          </button>
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500">
            {/* Close Icon (can be replaced with an SVG or library icon) */}
            <span><img src={closeIcon} alt="closeIcon" className="pr-[20px]" /></span>
            {/* <image src="src\libs\ui\assets\close-icon.svgsrc\libs\ui\assets\close-icon.svg"></image> */}
          </button>
        </div>

        {/* Scrollable content section */}
        <div className="p-4 overflow-y-auto max-h-[96vh]"> {/* Scroll inside the modal */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;