import React from 'react';
import { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import './homepage.css';

const Homepage = () => {
  return (
      <div className='home'>

        <h1 className='title'>Apply.io</h1>

        <Link to='/signUp'>
          <Button>Create an Account</Button>
        </Link>

        <Link to="/login">
          <Button>Log into Existing Account</Button>
        </Link>

      </div>
  )
}

export default Homepage;