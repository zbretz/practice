import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import AuthTesting from './AuthTesting.jsx'
import AuthProfile from './AuthProfile.jsx'
import { Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <AuthProvider>

      <Switch>
        <Route exact path="/profile" component={AuthProfile} />
        <Route exact path="/" component={AuthTesting} />
      </Switch>

    </AuthProvider>
  )
}

export default App;