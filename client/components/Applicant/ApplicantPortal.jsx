import React, { useRef, useState, useEffect } from 'react';
import { Switch, Route, Link, NavLink, useHistory } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'

const ApplicantPortal = () => {
  const history = useHistory()
  const { userSignOut, currentUser, userInfo, setUserInfo} = useAuth()
  // const [currentUserInfo, setCurrentUserInfo] = useState()

  console.log('userinfo: ', userInfo)
  console.log(localStorage)

  useEffect(()=>{

  if (!userInfo){
    let user_name = localStorage.getItem('user name')
    let user_email = localStorage.getItem('user email')
    console.log('TEST HERE: ', user_name)
    setUserInfo({
      name: user_name,
      email: user_email
    })
  // }

  }, [])


  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    history.push('/')
  }

  // useEffect(() => {

  //   setCurrentUserInfo(userInfo)

  //   return () => {
  //     setCurrentUserInfo()
  //   }

  // }, [])

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