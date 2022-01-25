import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import { Switch, Route, Link, NavLink } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'

import Homepage from './LandingPage/Homepage.jsx';
import Login from './LandingPage/Login.jsx';
import CreateProfilePage from './Applicant/CreateProfilePage.jsx'
import SignUp from './LandingPage/SignUp.jsx'
import ChooseAccountType from './ChooseAccountType.jsx'
import RecruiterPortal from './Recruiter/RecruiterPortal.jsx'
import ApplicantPortal from './Applicant/ApplicantPortal.jsx'
import AdminPortal from './Admin/AdminPortal.jsx'

const App = () => {
  return (
    <Container>
      <NavLink to="/">Back to Homepage</NavLink>
      <AuthProvider>

        <Switch>
          <Route exact path="/recruiterPortal" component={RecruiterPortal} />
          <Route exact path="/applicantPortal" component={ApplicantPortal} />
          <Route exact path="/adminPortal" component={AdminPortal} />
          <Route exact path="/createProfilePage" component={CreateProfilePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/chooseAccountType" component={ChooseAccountType} />
          <Route exact path="/" component={Homepage} />
        </Switch>

      </AuthProvider>
    </Container>
  )
}

export default App;