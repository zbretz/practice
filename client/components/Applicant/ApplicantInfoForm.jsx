import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink } from 'react-router-dom'

const ApplicantInfoForm = () => {

  return (
    <Container>

    <>
      <Card>
        <Card.Body>
          <h1>Applicant Info Form</h1>
          <Form>
            <Form.Group id="job">
              <Form.Label>Job Desired</Form.Label>
              <Form.Control type="text"  required />
            </Form.Group>
            <Form.Group id="location">
              <Form.Label>Location desired</Form.Label>
              <Form.Control type="text"  required />
            </Form.Group>
          </Form>

          <Link to="/applicantPortal" >
          <Button type="submit" >Go To Portal</Button>
          </Link>

        </Card.Body>
      </Card>
    </>

  </Container>
  )

}

export default ApplicantInfoForm;