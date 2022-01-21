import React from 'react';

const Button = ({ text, link, clickFn }) => {

  return (
    <button className='btn' onClick={() => clickFn()}>{text}</button>
  )

}

export default Button;