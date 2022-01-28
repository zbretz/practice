import React, { useRef, useState, useEffect } from 'react';
import { Switch, Route, Link, NavLink, useHistory } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'

const ApplicantPortal = () => {
  const history = useHistory()
  const { userSignOut, currentUser, userInfo} = useAuth()
  const [currentUserInfo, setCurrentUserInfo] = useState()

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    history.push('/')
  }

  useEffect(() => {

    setCurrentUserInfo(userInfo)

  }, [])

  return (
    <Container>
      <Button type="submit" onClick={handleSignOut}>Sign Out</Button>
         <h1> Applicant Portal </h1>
        <div>
        Hello {userInfo && userInfo.name} !
        You are signed in as {userInfo && userInfo.email}
        </div>
    </Container>
  )
}

export default ApplicantPortal