import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import AuthTesting from './AuthTesting.jsx'
import Homepage from './LandingPage/Homepage.jsx';
import Recruiter_Candidate_View from './Recruiter_Candidate_View.jsx'

const App = () => {
  return (
    // <AuthProvider>
    //   <h1>CommonApp</h1>
    //   <AuthTesting />
    //   <Homepage />
    // </AuthProvider>
    <Recruiter_Candidate_View />
  )
}

export default App;