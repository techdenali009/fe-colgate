import React, { ReactNode, ButtonHTMLAttributes, MouseEventHandler, KeyboardEventHandler } from 'react';
import './button.styles.scss'
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
    className?: string;
}

export const Button: React.FC<IButton> = ({
  children,
  type = 'button',
  onClick,
  onMouseEnter,
  onMouseLeave,
  onKeyUp,
  className = '',
  ...rest
}) => (
  <button
    type={type}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onKeyUp={onKeyUp}
    className={className}
    {...rest}
  >
    {children}
  </button>
);
