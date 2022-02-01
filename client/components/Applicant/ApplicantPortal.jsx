import React, { useRef, useState } from 'react';
import { Switch, Route, Link, NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Tab, Tabs } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'
import PortalTabs from './PortalTabs.jsx';

const ApplicantPortal = () => {

  // state to store which tab is home
  const [key, setKey] = useState('home')

  const history = useHistory()
  const { userSignOut} = useAuth()

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    history.push('/')
  }

  return (
    <Container>
      <Button type='submit' onClick={handleSignOut}>Sign Out</Button>
      <h1> Applicant Portal </h1>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className='mb-3'
      >
        <PortalTabs eventKey={'home'} title={'Candidate Profile'} />
        <PortalTabs eventKey={'react'} title={'React'} />
        <PortalTabs eventKey={'leetcode'} title={'LeetCode'} />
        <PortalTabs eventKey={'behavioral'} title={'Behavioral'} />
        <PortalTabs eventKey={'system'} title={'System'} />
      </Tabs>
    </Container>
  )
}

export default ApplicantPortal