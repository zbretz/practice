import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import AuthTesting from './AuthTesting.jsx'
import Homepage from './LandingPage/Homepage.jsx';
import Recruiter_Landing from './Recruiter_Landing.jsx'

const App = () => {
  return (
    // <AuthProvider>
    //   <h1>CommonApp</h1>
    //   <AuthTesting />
    //   <Homepage />
    // </AuthProvider>
    // <Recruiter_Candidate_View />
    <Recruiter_Landing />
  )
}

export default App;