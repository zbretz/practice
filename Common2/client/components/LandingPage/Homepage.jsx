import React from 'react';
import { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Switch, Route, Link, Redirect, useLocation } from 'react-router-dom'
import './homepage.css';

const Homepage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
      // <div className='home'>

      //   <h1 className='title'>Apply.io</h1>

        // <Link to='/signUp'>
        //   <Button>Create an Account</Button>
        // </Link>

        // <Link to="/login">
        //   <Button>Log into Existing Account</Button>
        // </Link>

      // </div>


<Container>
  <Row style={{height: '400px', display: 'flex'
 }}>
   {/* backgroundColor: 'gray' */}
    <Col style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', fontSize: '2.5em'}} xs={5}>
      <div>Common App: A better way to start your career</div>
      <div style={{width:'100%'}}>

      <span>
      <Link style={{display:'inline'}} to='/signUp'>
          <Button>Create an Account</Button>
        </Link>
        </span>

        <span>
        <Link  style={{display:'inline'}} to="/login">
          <Button>Log in</Button>
        </Link>
        </span>

      </div>
    </Col>
    {/* <Col>2 of 2</Col> */}<Col><img style={{width:'100%'}} src='hero.jpg'/></Col>
  </Row>
  {/* <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row> */}
</Container>
  )
}

export default Homepage;