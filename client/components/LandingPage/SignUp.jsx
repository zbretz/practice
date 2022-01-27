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
  const [validPw, setValidPw] = useState(true);

  const { signUp, isSignedIn, currentUser, userSignOut, signIn } = useAuth()

  const handleSignUp = (e) => {
    e.preventDefault();

    checkValidPW() ? (
      signUp(emailRef.current.value, passwordRef.current.value),
      setValidPw(true)
    ) : 
      setValidPw(false)
    
    // issue: requires 2 clicks
    // if (isSignedIn && currentUser) {
    // history.push('/chooseAccountType')
    // }
  }

  // function to verify that passwords match
  const verify = () => {
    // console.log(passwordRef.current.value);
    // console.log(verifyPassword.current.value);

    passwordRef.current.value === verifyPassword.current.value ? setPWMatch(true) : setPWMatch(false);
  }

  const checkValidPW = () => {
    var special_chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    let containsUpper = false;
    let containsSymbol = false;
    let containsNumber = false;

    let password = passwordRef.current.value;

    for (let i = 0; i < password.length; i++) {
      // check to see if it contains uppercase
      if (/^[A-Z]*$/.test(password[i])) {
        containsUpper = true;
      } 

      // check to see if it contains special character
      if (special_chars.test(password[i])) {
        // console.log('hi');
        containsSymbol = true;
      }

      // check if string contains number
      if (/\d/.test(password[i])) {
        containsNumber = true;
      }
    }
    
    if ((containsUpper && containsSymbol) && containsNumber) {
      return true;
    } else {
      return false;
    }

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
              {validPw ? <Alert variant="secondary">Your password must contain an uppercase letter, a special character, and a number</Alert> : <Alert variant="danger">Invalid Password type</Alert>}
              <Form.Group id="password">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control type="password" ref={verifyPassword} required onChange={() => verify()}/>
              </Form.Group>
              {pwMatch ? <></> : <Alert variant="danger">Password doesn't match</Alert>}
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