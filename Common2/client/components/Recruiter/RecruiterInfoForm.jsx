import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink, useLocation } from 'react-router-dom'

const RecruiterInfoForm = () => {

  return (
    <Container>

    <>
      <Card>
        <Card.Body>
          <h1>Recruiter Info Form</h1>
          <Form>
            <Form.Group id="job">
              <Form.Label>Job to Fill</Form.Label>
              <Form.Control type="text"  required />
            </Form.Group>
            <Form.Group id="location">
              <Form.Label> Location of Job</Form.Label>
              <Form.Control type="text"  required />
            </Form.Group>
          </Form>

          <Link to="/recruiterPortal" >
          <Button type="submit" >Go To Portal</Button>
          </Link>

        </Card.Body>
      </Card>
    </>

  </Container>
  )

}

export default RecruiterInfoForm;