// src/components/atoms/Modal/Modal.tsx
import React from 'react';

interface RegisterProps {
  children : React.ReactNode;
}

const Registration: React.FC<RegisterProps> = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content sign-in-modal bg-brand-white-100 w-[var(--sign-in-width-mob)] lg:w-[var(--sign-in-width-desk)] rounded-br-[var(--sign-in-bottom-right-border-radius)] relative overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Registration;