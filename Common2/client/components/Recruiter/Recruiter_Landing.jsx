import React, { useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from '../styles/recruiterLanding.module.css'
import { Switch, Route, Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom'

import Recruiter_Candidate_View from './Recruiter_Candidate_View.jsx'



const data = {
  candidates:
  [
    {
      name:"Jose Solis",
      id: 1,
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

  const history = useHistory()
  let match = useRouteMatch();
  console.log(match)


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
              {/* <Link to="recruiterPortal/c">Home</Link> */}
              <Link to={`${match.url}c`}>kjkjkj</Link>
              {/* <Button onClick={()=> history.push(`/candidate-${candidate.id}`)} variant="primary">Go somewhere</Button> */}
              <Button onClick={()=> history.push(`/recruiterPortal/candidate?id=${candidate.id}`)} variant="primary">Go somewhere</Button>

            </Card.Body>
          </Card>
        )
      })}



    </Container>
{/*
    <Switch>
      <Route path={`${match.path}/c`}>
      <Button onClick={()=> history.push(`/recruiterPortal`)} variant="primary">Go somewhere</Button>
        <Recruiter_Candidate_View/>
      </Route>
    </Switch> */}

    </>


  )
}

export default Recruiter_Landing;