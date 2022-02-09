import React, { useRef, useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from '../styles/recruiterLanding.module.css'
import { Switch, Route, Link, NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import { useRecruiterData } from '../../contexts/RecruiterContext.js'
import Recruiter_Candidate_View from './Recruiter_Candidate_View.jsx'

const Recruiter_Landing = () => {

  const history = useHistory()
  let match = useRouteMatch();
  console.log(match)

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {

  function getApplicants() {
      axios.get(`http://localhost:3000/applicants`).then(res => {

        // const { currentApplicantData, setCurrentApplicantData } = useRecruiterData()

        console.log(res.data)
        console.log(res.data.candidates)
        setData(res.data)
        setIsLoading(false)
        console.log(res.data)
      })
    }

      getApplicants();

  }, [])


  return (
    <>

    {!isLoading &&

        <Container style={{width:"80%"}}>

        {Object.values(data).map(candidate => {
          return(
            <Card className={styles.card}>
              <Card.Header as="h5">{candidate.name}</Card.Header>
              <Card.Body>
                <Card.Title>{candidate.desired_position}</Card.Title>
                <Card.Text>
                  {candidate.background}{candidate.school ? `: ${candidate.school}` : null}
                </Card.Text>
                <Card.Text>
                  {candidate.review_blurb}
                </Card.Text>
                {/* <Link to="recruiterPortal/c">Home</Link> */}
                {/* <Link to={`${match.url}c`}></Link> */}
                {/* <Button onClick={()=> history.push(`/candidate-${candidate.id}`)} variant="primary">Go somewhere</Button> */}
                {/* <Button onClick={()=> history.push(`/recruiterPortal/candidate?id=${candidate.id}`)} variant="primary">Go somewhere</Button> */}
                <Button onClick={()=> history.push(`/recruiterPortal/candidate/${candidate.user_id}`)} variant="primary">Visit Profile</Button>

              </Card.Body>
            </Card>
          )
        })}

</Container>


      }



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