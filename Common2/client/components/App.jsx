import React, { useRef } from 'react';
import { AuthProvider } from '../contexts/AuthContext'
import { RecruiterContext } from '../contexts/RecruiterContext'

import { Switch, Route, Link, NavLink } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'

import Homepage from './LandingPage/Homepage.jsx';
import SignUp from './LandingPage/SignUp.jsx'
import ChooseAccountType from './ChooseAccountType.jsx'
import Login from './LandingPage/Login.jsx';
import ApplicantPortal from './Applicant/ApplicantPortal.jsx'
import ApplicantInfoForm from './Applicant/ApplicantInfoForm.jsx'
import RecruiterPortal from './Recruiter/RecruiterPortal.jsx'
import RecruiterInfoForm from './Recruiter/RecruiterInfoForm.jsx'
import AdminPortal from './Admin/AdminPortal.jsx'
import AdminInfoForm from './Admin/AdminInfoForm.jsx'
import Recruiter_Candidate_View from './Recruiter/Recruiter_Candidate_View.jsx'

const App = () => {

  return (
    <Container>
      <NavLink to="/">Back to Homepage</NavLink>
      <AuthProvider>
        <RecruiterContext>
        <Switch>
          <Route exact path="/applicantPortal" component={ApplicantPortal} />
          <Route exact path="/applicantInfoForm" component={ApplicantInfoForm} />
          <Route exact path="/recruiterPortal" component={RecruiterPortal} />
          <Route exact path="/recruiterPortal/candidate/:id" component={Recruiter_Candidate_View} />
          <Route exact path="/recruiterInfoForm" component={RecruiterInfoForm} />
          <Route exact path="/adminPortal" component={AdminPortal} />
          <Route exact path="/adminInfoForm" component={AdminInfoForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/chooseAccountType" component={ChooseAccountType} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        </RecruiterContext>

      </AuthProvider>
    </Container>
  )
}

export default App;