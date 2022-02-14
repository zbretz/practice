import React, { useRef, useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import styles from '../styles/recruiterCandidateView.module.css'
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink, useLocation, useParams } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios';

function ControlledTabs({data}) {
  const [key, setKey] = useState('Profile');

  console.log('data: ', data)

  return (

    <>
    {/* test tabs */}
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >

      {data.map(phase=>{
console.log(phase[1])
console.log(phase)

return(

      <Tab eventKey={phase.phase} title={phase.phase}>
      <h2>Frontend Interview (React)</h2>

      {/* <Container> */}
        <h5 style={{marginTop: "30px"}}  >Interviewer: {phase.interviewer}</h5>
      {/* </Container> */}

      <div>
        <h5  style={{marginTop: "30px"}}>Performance Summary</h5>
        <div>{phase.performance_summary}</div>
      </div>

      {/* <img src="./screenshot.png"/>
      <img src={require('./screenshot.png')}/> */}

      <div style={{width: "100%", height: "300px", backgroundColor:"black", marginTop: "30px"}}></div>

      <h5 style={{marginTop: "30px"}} >Evaluation: </h5>


      </Tab>

)
      })}


    </Tabs>
    {/* end test tabs */}


    </>
  );
}

const Recruiter_Candidate_View = () => {

  // const { search } = useLocation()
  // console.log(search)
  // const values = queryString.parse(search)
  // let user_id = values.id
  let { id } = useParams();
  let user_id = id
  console.log(user_id)
  const [applicantData, setApplicantData] = useState()
  const [interviewData, setInterviewData] = useState()

  useEffect(() => {

  function getUserData() {
      axios.get(`http://localhost:3000/applicants/${user_id}`)
      .then(res => {
        setApplicantData(res.data)
        console.log(res.data)
        console.log('woohoo')
      })

      axios.get(`http://localhost:3000/interviews/${user_id}`)
      .then(res => {
        setInterviewData(res.data)
        console.log(res.data)
        console.log('woohoo')
      })

    axios.get(`http://localhost:3000/interviews/evaluations1/${user_id}`)
    .then(res => {
      setInterviewData(res.data)
      console.log('interviews with evaluations')
      console.log(res.data)
    })
  }

    if (user_id) {
      getUserData();
    }
  }, [])

  return (



    <Container style={{width:"80%"}}
>
  {applicantData && interviewData &&
    <>
      <Container className={styles.candidateHeader}>
        <h1>{applicantData.name} <small className={styles.jobTitle}> Full Stack Engineer</small></h1>
      </Container>
      <Container>
        <ControlledTabs data = {interviewData} />
      </Container>

</>}
    </Container>


  )
}

export default Recruiter_Candidate_View;