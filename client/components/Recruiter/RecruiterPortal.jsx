import React, { useRef } from 'react';
import { Switch, Route, Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'
import Recruiter_Landing from './Recruiter_Landing.jsx'
import styles from '../styles/recruiterLanding.module.css'

const RecruiterPortal = () => {
  const history = useHistory()
  let match = useRouteMatch();
  const { userSignOut} = useAuth()

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    history.push('/')
  }

  return (
    <>
    <Container>
      <Button type="submit" onClick={handleSignOut}>Sign Out</Button>
      <h1> Recruiter Portal </h1>
    </Container>

    <Switch>

      <Route path={`${match.path}/`}>
        <Recruiter_Landing/>
      </Route>

    </Switch>
    </>
  )
}

export default RecruiterPortal