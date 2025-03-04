import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './button.css';

export type ButtonProps = {
  label: string; 
  variant?: 'cta' | 'primary' | 'outline' | 'borderless' | 'destructive';
  state?: 'default' | 'hover' | 'focused' | 'selected' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void; 
  icon?: React.ReactNode;
};


/** Primary UI component for user interaction */
export const Button = ({
  label, 
  variant = 'primary', 
  state = 'default',
  size = 'medium',
  onClick,
  icon = <FaPlus />,
  ...props
}: ButtonProps) => {
  return (
    <>
    <button
      type="button"
      className={`btn ${variant} ${state} ${size}`}
      disabled={state === 'disabled'}
      onClick={onClick}
      {...props}
    >
      <span className="btn-text">{label}</span>
      {(size === 'medium' || size === 'large') && <span className="btn-icon">{icon}</span>}
    </button>
    </>
  );
};
