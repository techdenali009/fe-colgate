import React from 'react';

interface modalBodyProps {
    title: string
    children :  React.ReactNode;
    className?:string
    
}

const ModalBody: React.FC<modalBodyProps> = ({children, className='' }) => {
  return(
    <div className={`modal-body screenset-wrapper p-0 false !pb-0 mt-[50px] ${className}`}>
      {children}
    </div>
  )
}

export default ModalBody;