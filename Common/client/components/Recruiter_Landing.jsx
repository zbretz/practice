import React, { useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './styles/recruiterCandidateView.module.css'

const data = {
  [
    {
      name:"Jose Solis",
      position: "Full Stack Engineer",
      background: "Bootcamp Graduate"
      review_blurb: "Strong Front End skills. Strong Implementation. Solid data structure aptitude.",
    },
    {
      name:"Zachary Bretz",
      position: "Full Stack Engineer",
      background: "Bootcamp Graduate"
      review_blurb: "Interested in team management. Underwhelming leetcode performance. Strong system design.",
    }

}

const Recruiter_Landing = () => {

  return (
    <>
    <Container style={{width:"80%"}}>

    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Container>
    </>

  )
}

export default Recruiter_Landing;