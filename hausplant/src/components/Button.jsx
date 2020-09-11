import React from 'react';
import './Button.css';

const styles = [
  'main-button',
  'outline-button'
]

const sizes = [
  'medium-button',
  'large-button'
]

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {


  const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle :
    styles[0];
  
  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <button
      className={`button ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}