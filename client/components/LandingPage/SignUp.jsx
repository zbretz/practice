import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink, useHistory } from 'react-router-dom'

const SignUp = () => {
  const history = useHistory()
  const emailRef = useRef()
  const passwordRef = useRef()

  // to verify pw
  const verifyPassword = useRef();

  const [pwMatch, setPWMatch] = useState(true);

  const { signUp, isSignedIn, currentUser, userSignOut, signIn } = useAuth()

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(emailRef.current.value, passwordRef.current.value)
    // issue: requires 2 clicks
    // if (isSignedIn && currentUser) {
    history.push('/chooseAccountType')
    // }
  }

  // function to verify that passwords match
  const verify = () => {
    // console.log(passwordRef.current.value);
    // console.log(verifyPassword.current.value);

    passwordRef.current.value === verifyPassword.current.value ? setPWMatch(true) : setPWMatch(false);
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
              <Form.Group id="password">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control type="password" ref={verifyPassword} required onChange={() => verify()}/>
              </Form.Group>
              {pwMatch ? <></> : <Alert variant="danger">Incorrect Password Verification</Alert>}
            </Form>
            {/* <Button onClick={() => verify()}>Verify</Button> */}
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