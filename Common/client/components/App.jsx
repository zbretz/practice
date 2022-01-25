import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import AuthTesting from './AuthTesting.jsx'
import Homepage from './LandingPage/Homepage.jsx';

const App = () => {
  return (
    <AuthProvider>
      <h1>CommonApp</h1>
      <AuthTesting />
      <Homepage />
    </AuthProvider>
  )
}

export default App;