import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'
import { Switch, Route, Link, Redirect, NavLink, useHistory } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'

const Login = () => {
  const history = useHistory()
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signUp, role, isSignedIn, currentUser, userSignOut, signIn } = useAuth()

  const [key, setKey] = useState('applicant');


  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(emailRef.current.value, passwordRef.current.value)
    // issue: requires 2 clicks
    if (isSignedIn && currentUser) {
      history.push(`/${role}Portal` || '/')
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

      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >

      <Tab eventKey={'applicant'} title="Applicant Login">


        <Card>
          <Card.Body>
            <h1>Applicant Log In</h1>
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

      </Tab>
      <Tab eventKey={"recruiter"} title="Recruiter Login">
          <Card>
            <Card.Body>
              <h1>Recruiter Log In</h1>
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
        </Tab>
      </Tabs>
      </>
      <div>
        Need to make an Account?
        <Link to="/signUp">  Sign Up</Link>
      </div>

    </Container>
  )

}

export default Login