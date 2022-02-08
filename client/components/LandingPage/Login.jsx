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
  const emailRefRecruiter = useRef()
  const passwordRefRecruiter = useRef()
  const emailRefApplicant = useRef()
  const passwordRefApplicant = useRef()
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
      if (user_type === 'applicant') {
        console.log("applicant log in: ", emailRefApplicant.current.value, passwordRefApplicant.current.value, user_type)
        const loginInfoApplicant = await signIn(emailRefApplicant.current.value, passwordRefApplicant.current.value, user_type)
        history.push(`/${loginInfoApplicant.role}Portal`)
      } else if (user_type === 'recruiter') {
        console.log("recruiter log in: ", emailRefRecruiter.current.value, passwordRefRecruiter.current.value, user_type)
        const loginInfoRecruiter = await signIn(emailRefRecruiter.current.value, passwordRefRecruiter.current.value, user_type)
        history.push(`/${loginInfoRecruiter.role}Portal`)
      } else {
        console.log("user type not applicant or recruiter")
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
            <Form onSubmit={(e)=>handleSignIn(e, 'applicant')}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRefApplicant} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRefApplicant} required />
              </Form.Group>
               <Button type="submit">Log In</Button>
            </Form>



          </Card.Body>
        </Card>

      </Tab>
      <Tab eventKey={"recruiter"} title="Recruiter Login">
          <Card>
            <Card.Body>
              <h1>Recruiter Log In</h1>
              {/* {JSON.stringify(currentUser)} */}
              <Form onSubmit={(e)=>handleSignIn(e, 'recruiter')}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRefRecruiter} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRefRecruiter} required />
                </Form.Group>
                <Button type="submit">Log In</Button>
              </Form>

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