import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'
import { Switch, Route, Link, Redirect, NavLink, useHistory } from 'react-router-dom'
import axios from 'axios'
import regeneratorRuntime from 'regenerator-runtime'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'


const Login = () => {
  const history = useHistory()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  // const [loading, setLoading] = useState(false)
  const { signUp, userInfo, currentUser, userSignOut, signIn, currentUserInfo } = useAuth()
  // const [userInfo, setUserInfo] = useState({ role: "", email: "" })

  const [key, setKey] = useState('applicant');


  async function handleSignIn(e, user_type) {
    e.preventDefault();
    try {
      setError("")
      // setLoading(true)
      const loginInfo = await signIn(emailRef.current.value, passwordRef.current.value, user_type)
      // if ( currentUser && userInfo) {
      history.push(`/${loginInfo.role}Portal`)
      // }
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

            <Button type="button" onClick={(e)=>handleSignIn(e, 'applicant')}>Log In</Button>

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

              <Button type="button" onClick={(e)=>handleSignIn(e, 'recruiter')}>Log In</Button>

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