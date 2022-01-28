import React, { useRef } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

const AuthTesting = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signUp, currentUser, userSignOut, signIn } = useAuth()

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(emailRef.current.value, passwordRef.current.value)
    // console.log('You signed up.', "user info is: ", emailRef.current.value, passwordRef.current.value);
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(emailRef.current.value, passwordRef.current.value)
    // console.log(emailRef.current.value + ' signed in.');
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    // console.log('You signed out.');
  }

  return (
    <Container>
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
            <Button type="submit" onClick={handleSignOut}>Sign Out</Button>
            <Button type="submit" onClick={handleSignIn}>Sign In</Button>
          </Card.Body>
        </Card>
      </>
    </Container>
  )

}

export default AuthTesting