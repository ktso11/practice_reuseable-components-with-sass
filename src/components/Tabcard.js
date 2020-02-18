import React, { useState } from 'react';
import { css } from '@emotion/core';
// import './Tabcard.scss';

const Tabcard = () => {

  const [background, setBackground] = useState("#ffffff")
  const [font, setFont] = useState("#036336");

  const setStyle = (background, font) => {
    setBackground(background)
    setFont(font)
  }

  const tabcard = css`
    color: ${font};
    height: 300px;
    width: 300px;
    border: 1px solid black;

    background-color: ${background};
    label {
      font-weight: 800;
    }
  `;

  const blackBtn = css`
    background-color: #000000;
    color: #ffffff;
  `;

    return (
      <div className={tabcard}>
        <label>Testing</label>
        <p>content</p>
        <button onMouseEnter={() => setStyle("#999999")} className={blackBtn}> i am a button</button>
      </div>
    )
  }



export default Tabcard;
