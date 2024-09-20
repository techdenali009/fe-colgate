import React, { ReactNode } from 'react';

interface IButton {
    children: ReactNode
    type: "submit" | "reset" | "button" | undefined,
    onClick?: () => void,
    className?: string,
}

export const Button: React.FC<IButton> = ({ children, onClick, className = '', ...rest }) => (
    <button onClick={onClick} className={className} {...rest} >{children}</button>
);