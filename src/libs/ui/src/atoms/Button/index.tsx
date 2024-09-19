import React, { ReactNode } from 'react';
import './button.styles.scss'
interface IButton {
    children: ReactNode
    type: "submit" | "reset" | "button" | undefined,
    onClick?: () => void,
    className?: string,
}

export const Button: React.FC<IButton> = ({ children, onClick, className = '', ...rest }) => (
    <button onClick={onClick} className={`${className} sadas asdasdas dfsdfsdfcvv`} {...rest} >{children}</button>
);