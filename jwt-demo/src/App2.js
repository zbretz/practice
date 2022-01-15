// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81
// https://www.codementor.io/@manashkumarchakrobortty/authentication-and-authorization-in-node-js-19brdvhsyw

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function Child({onMount}) {
  const [value, setValue] = useState(0);

  // console.log('child')

  useEffect(() => {
    onMount([value, setValue]);
    // setTimeout(()=>setValue(value + 1), 1000)
  }, [onMount, value]);


  return (
    <div>
      {value}
    </div>
  );
};


function Parent() {

  // console.log('parent')


  let value = null;
  let setValue = null;

  const onChildMount = (dataFromChild) => {
    value = dataFromChild[0];
    setValue = dataFromChild[1];
  };

  // Call setValue to update child without updating parent

  return (
    <>
    <button onClick={()=>(setValue(12))}>
      click
    </button>


    <div style={{'height': '200px'}}>
      <p>sdsds</p>
    </div>
    <div>
      <Child onMount={onChildMount}/>
    </div>
    </>
  );
};

export default Parent;