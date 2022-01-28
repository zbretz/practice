import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'
import { Switch, Route, Link, Redirect, NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'
import regeneratorRuntime from 'regenerator-runtime'

const Login = () => {
  const history = useHistory()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  // const [loading, setLoading] = useState(false)
  const { signUp, userInfo, isSignedIn, currentUser, userSignOut, signIn, currentUserInfo} = useAuth()
  // const [userInfo, setUserInfo] = useState({ role: "", email: "" })


    async function handleSignIn(e) {
    e.preventDefault();

    try {
      setError("")
      // setLoading(true)
      await signIn(emailRef.current.value, passwordRef.current.value)
      if ( currentUser && userInfo) {
          history.push(`/${userInfo.role}Portal`)
      }
    } catch {
      setError("Failed to login")
    }

    // setLoading(false)

    // // API Call
    // axios({
    //   method: 'get',
    //   url: '/applicants/:1'
    //   // email:currentUser.email,
    //   // password: currentUser.uid,
    // })
    //   .then(function (response) {
    //     setUserInfo(response.data)
    //   })
    //   .then(() => {
        // issue: requires 2 clicks

      // })
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
             {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSignIn}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              {/* disabled={loading} */}
              <Button type="submit" >Log In</Button>
            </Form>
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