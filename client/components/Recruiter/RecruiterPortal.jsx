import React, { useRef, useState, useEffect } from 'react';
import { Switch, Route, Link, NavLink, useHistory } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'

const RecruiterPortal = () => {
  const history = useHistory()
  const { userSignOut, currentUser, userInfo, setUserInfo} = useAuth()
  // const [currentUserInfo, setCurrentUserInfo] = useState()

  useEffect(()=>{
    //if userInfo is lost (for instance on refresh), retrieve user data from local storage
    if (!userInfo){
      let user_data = JSON.parse(localStorage.getItem('user_data'))
      setUserInfo({
        name: user_data.name,
        email: user_data.email
      })
    }
  }, [])

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    history.push('/')
  }

  return (
    // <Container>
    //   <Button type="submit" onClick={handleSignOut}>Sign Out</Button>
    //   <h1> Recruiter Portal </h1>
    // </Container>
    <Container>
    <Button type="submit" onClick={handleSignOut}>Sign Out</Button>
       <h1> Recruiter Portal </h1>
      <div>
      Hello {userInfo && userInfo.name} !
      You are signed in as {userInfo && userInfo.email}.
      You are a {userInfo.role}
      </div>
  </Container>
  )
}

export default RecruiterPortal