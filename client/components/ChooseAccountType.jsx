import React from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap'

const ChooseAccountType = () => {
  return (
    <div>
      <h1>Choose Account Type  </h1>
      <div>
        <Link to='/applicantInfoForm'>
          <Button>Applicant</Button>
        </Link>
         or
        {/* <Link to="/"> */}
          <Button>Recruiter</Button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default ChooseAccountType