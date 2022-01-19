import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import AuthTesting from './AuthTesting.jsx'

const App = () => {
  return (
    <AuthProvider>
      <h1>CommonApp</h1>
      <AuthTesting />
    </AuthProvider>
  )
}

export default App;