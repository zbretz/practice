import React, { useRef } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink, useHistory } from 'react-router-dom'

const SignUp = () => {
  const history = useHistory()
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signUp, isSignedIn, currentUser, userSignOut, signIn } = useAuth()

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(emailRef.current.value, passwordRef.current.value)
    //  if (isSignedIn && currentUser) {
    history.push('/chooseAccountType')
    // }
  }


  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    // console.log('You signed out.');
  }

  return (
    <Container>
      <Button type="submit" onClick={handleSignOut}>Sign Out</Button>
      <>
        <Card>
          <Card.Body>
            <h1>Sign Up</h1>
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

            <Button type="submit" onClick={handleSignUp}>Sign Up</Button>

          </Card.Body>
        </Card>
      </>
      <div>
        Already Have an Account?
        <Link to="/login">  Log In</Link>
      </div>

    </Container>
  )

}

export default SignUp