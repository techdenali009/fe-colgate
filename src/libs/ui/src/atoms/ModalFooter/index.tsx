import React from 'react';

interface modalFooterProps {
    children ?: React.ReactNode;
}

const ModalFooter: React.FC<modalFooterProps> = ({ children }) => {
  return(
    <div className="modal-footer" >
      {children}
    </div>
  )
}

export default ModalFooter;