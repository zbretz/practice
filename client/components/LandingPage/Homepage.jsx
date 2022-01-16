import React from 'react';
import Buttons from '../Buttons.jsx';

import './homepage.css';

const Homepage = () => {

 return (
  <div className='home'>
    <h1 className='title'>Apply.io</h1>
      <div className='buttons'>
        <Buttons text={'Register'} />
        <Buttons text={'Sign Up'} /> 
      </div>
  </div>
 )
}

export default Homepage;