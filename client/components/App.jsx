import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import AuthTesting from './AuthTesting.jsx'
import AuthProfile from './AuthProfile.jsx'
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from './LandingPage/Homepage.jsx';

const App = () => {
  return (
    <AuthProvider>

      <Switch>
        <Route exact path="/profile" component={AuthProfile} />
        <Route exact path="/signUp" component={AuthTesting} />
        <Route exact path="/" component={Homepage} />
      </Switch>

    </AuthProvider>
  )
}

export default App;