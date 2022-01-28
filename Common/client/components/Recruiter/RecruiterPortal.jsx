import React, { useRef } from 'react';
import { Switch, Route, Link, NavLink, useHistory } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'

const RecruiterPortal = () => {
  const history = useHistory()
  const { userSignOut} = useAuth()

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    history.push('/')
  }

  return (
    <Container>
      <Button type="submit" onClick={handleSignOut}>Sign Out</Button>
      <h1> Recruiter Portal </h1>
    </Container>
  )
}

export default RecruiterPortal