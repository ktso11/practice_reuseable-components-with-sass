import React from 'react';


import './Button.scss';

//available styles
const STYLES = [
  "primary", 
  "danger"
]

//available sizes
const SIZES = [
  "medium",
  "large"
]

const Button = ({
  //passing props
    text, 
    onClick, 
    btnStyle, 
    btnSize
  }) => {
    //expect to see if value passed in is included in the Styles array
    //if it is true, return that style, else use fallback [0]
    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

    return (
      <button 
        className={`Button ${checkBtnSize} ${checkBtnStyle}`}
        onClick={onClick}>
        {text}
      </button>
    )
  }



export default Button;
