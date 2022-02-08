import React, { useRef, useEffect } from 'react';
import { Switch, Route, Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'
import Recruiter_Landing from './Recruiter_Landing.jsx'
import styles from '../styles/recruiterLanding.module.css'

const RecruiterPortal = () => {

  const { userSignOut, currentUser, userInfo, setUserInfo} = useAuth()
  const history = useHistory()
  let match = useRouteMatch();

  useEffect(()=>{
    console.log('RECRUITER USER INFO: ', userInfo)
    //if userInfo is lost (for instance on refresh), retrieve user data from local storage
    if (!userInfo){
      console.log('fetching user info from storage')
      let stored_user_data = JSON.parse(localStorage.getItem('stored_user_data'))
      setUserInfo({
        name: stored_user_data.name,
        email: stored_user_data.email
      })
    }
  }, [])

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
      {userInfo &&
       <p>{userInfo.name}</p>
      }
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