import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import { Switch, Route, Link, NavLink } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'

import Homepage from './LandingPage/Homepage.jsx';
import Recruiter_Candidate_View from './Recruiter_Candidate_View.jsx'
import Recruiter_Landing from './Recruiter_Landing.jsx'


const App = () => {
  return (
    // <AuthProvider>
    //   <h1>CommonApp</h1>
    //   <AuthTesting />
    //   <Homepage />
    // </AuthProvider>
    // <Recruiter_Candidate_View />
    <Recruiter_Landing />  )
}

export default App;