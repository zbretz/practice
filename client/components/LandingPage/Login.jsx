import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'
import { Switch, Route, Link, Redirect, NavLink, useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signUp, role, isSignedIn, currentUser, userSignOut, signIn } = useAuth()

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(emailRef.current.value, passwordRef.current.value)
    console.log('user role is ', role)
    // issue: requires 2 clicks
    if (isSignedIn && currentUser) {
      history.push(`/${role}Portal` || '/portal')
    }

  }

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
  }

  return (
    <Container>
      <Button type="submit" onClick={handleSignOut}>Sign Out</Button>

      <>
        <Card>
          <Card.Body>
            <h1>Log In</h1>
            {/* {JSON.stringify(currentUser)} */}
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
            </Form>

            <Button type="button" onClick={handleSignIn}>Log In</Button>

          </Card.Body>
        </Card>
      </>
      <div>
        Need to make an Account?
        <Link to="/signUp">  Sign Up</Link>
      </div>

    </Container>
  )

}

export default Login