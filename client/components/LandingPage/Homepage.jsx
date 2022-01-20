import React from 'react';
import { useState } from 'react';
import Buttons from '../Buttons.jsx';
import Login from './Login.jsx';

import './homepage.css';

const Homepage = () => {

  const [login, setLogin] = useState(false);

  const clickLogin = () => {
    setLogin(true);
  }

  return (
  <div className='home'>
    <h1 className='title'>Apply.io</h1>
      {login ? <Login /> : <></>}
      <div className='buttons'>
        <Buttons text={'Log In'} clickFn={clickLogin}/>
        <Buttons text={'Sign Up'} /> 
      </div>
  </div>
  )
}

export default Homepage;