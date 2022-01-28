import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink } from 'react-router-dom'

// Form Component to capture the applicant information
const ApplicantInfoForm = () => {

  // Gather all applicant information
  // send it to database via POST request

  // username
  // full name
  // email
  // github link
  // linkedin link
  // job desired
  // location desired (remote, etc)
  // resume upload

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [jobPref, setJobPref] = useState('');
  const [locationPref, setLocationPref] = useState('');
  const [resume, setResume] = useState({});

  const handleNameInput = (e) => {
    console.log('name', e.target.value);
    // setName(e.target.value);
  }

  const handleEmailInput = (e) => {
    console.log('email', e.target.value);
    // setEmail(e.target.value);
  }

  const handleGithubInput = (e) => {
    console.log('github', e.target.value);
    // setGithub(e.target.value);
  }

  const handleLinkedInInput = (e) => {
    console.log('linkedin', e.target.value);
    // setLinkedIn(e.target.value);
  }

  const handleJobPrefInput = (e) => {
    console.log('Job', e.target.value);
    // setJobPref(e.target.value);
  }

  const handleLocationPref = (e) => {
    console.log('Location', e.target.value);
    // setLocationPref(e.target.value);
  }

  const handleResume = (e) => {
    console.log('resume', e.target.files[0]);
    // setResume(e.target.files[0])
  }

  return (
    <Container>
    <>
      <Card>
        <Card.Body>
          <h1>Applicant Info Form</h1>
          <Form>
            <Form.Group id="fullName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control type="text" onChange={(e) => handleNameInput(e)} required/>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" onChange={(e) => handleEmailInput(e)} required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Github Link:</Form.Label>
              <Form.Control type="text" onChange={(e) => handleGithubInput(e)} required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>LinkedIn Link:</Form.Label>
              <Form.Control type="text" onChange={(e) => handleLinkedInInput(e)} required/>
            </Form.Group>
            <Form.Group id="job">
              <Form.Label>Job Desired</Form.Label>
              <Form.Select 
                value={jobPref}
                onChange={(e) => handleJobPrefInput(e)}
                required>
                  <option value=""></option>
                  <option value="Front End">Front End</option>
                  <option value="Back End">Back End</option>
                  <option value="Full Stack">Full Stack</option>
              </Form.Select>
            </Form.Group>
            <Form.Group id="location">
              <Form.Label>Location desired</Form.Label>
              <Form.Control type="text" onChange={(e) => handleLocationPref(e)} required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload your resume:</Form.Label>
              <Form.Control type="file" onChange={(e) => handleResume(e)} required/>
            </Form.Group>
          </Form>

          <Link to="/applicantPortal" >
          <Button type="submit">Go To Portal</Button>
          </Link>

        </Card.Body>
      </Card>
    </>

  </Container>
  )

}

export default ApplicantInfoForm;