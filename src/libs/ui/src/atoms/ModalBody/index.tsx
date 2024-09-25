import React from "react";

interface modalBodyProps {
    title: string
    children :  React.ReactNode;
    className?:string
    
}

const ModalBody: React.FC<modalBodyProps> = ({title,children, className='' }) => {
    return(
        <div className={`modal-body screenset-wrapper !p-12 !pt-8 false !pb-0 mt-[50px] ${className}`}>
            {children}
        </div>
    )
}

export default ModalBody;