import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink } from 'react-router-dom'

const AdminInfoForm = () => {

  return (
    <Container>

    <>
      <Card>
        <Card.Body>
          <h1>Admin Info Form</h1>
          <Form>
            <Form.Group id="job">
              <Form.Label>Position</Form.Label>
              <Form.Control type="text"  required />
            </Form.Group>
            <Form.Group id="accessCode">
              <Form.Label>Access Code</Form.Label>
              <Form.Control type="text"  required />
            </Form.Group>
          </Form>

          <Link to="/adminPortal" >
          <Button type="submit" >Go To Portal</Button>
          </Link>

        </Card.Body>
      </Card>
    </>

  </Container>
  )

}

export default AdminInfoForm;