import React, { useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from './styles/recruiterLanding.module.css'


const data = {
  candidates:
  [
    {
      name:"Jose Solis",
      position: "Full Stack Engineer",
      background: "Bootcamp Graduate",
      review_blurb: "Strong Front End skills. Strong Implementation. Solid data structure aptitude.",
    },
    {
      name:"Zachary Bretz",
      position: "Full Stack Engineer",
      background: "Bootcamp Graduate",
      review_blurb: "Interested in team management. Underwhelming leetcode performance. Strong system design.",
    }
  ]

}

const Recruiter_Landing = () => {

  return (
    <>
    <Container style={{width:"80%"}}>

      {data.candidates.map(candidate => {
        return(
          <Card className={styles.card}>
            <Card.Header as="h5">{candidate.name}</Card.Header>
            <Card.Body>
              <Card.Title>{candidate.position} {candidate.background}</Card.Title>
              <Card.Text>
                {candidate.review_blurb}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      })}

    </Container>
    </>

  )
}

export default Recruiter_Landing;