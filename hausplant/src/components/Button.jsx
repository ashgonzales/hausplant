import React from 'react';
import './Button.css';

const STYLES = [
  'btn--primary',
  'btn--outline'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  // Check if this already includes a button style
  // If not, it reverts to the style (button primary) in the first position
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle :
    STYLES[0];
  
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}