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

      {Object.entries(data).map(phase=>{
console.log(phase[1])
return(

      <Tab eventKey={phase[1].tab} title={phase[1].tab}>
      <h2>Frontend Interview (React)</h2>

      {/* <Container> */}
        <h5 style={{marginTop: "30px"}}  >Interviewer: {phase[1].interviewer_name}</h5>
      {/* </Container> */}

      <div>
        <h5  style={{marginTop: "30px"}}>Performance Summary</h5>
        <div>{phase[1].performance_summary}</div>
      </div>

      {/* <img src="./screenshot.png"/>
      <img src={require('./screenshot.png')}/> */}

      <div style={{width: "100%", height: "300px", backgroundColor:"black", marginTop: "30px"}}></div>

      <h5 style={{marginTop: "30px"}} >Evaluation: </h5>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Excellent</th>
            <th>Very Good</th>
            <th>Good</th>
            <th>Fair</th>
          </tr>
        </thead>
        <tbody>
            {/* <td>{Asked Qs when needed}</td> */}
            {phase[1].evaluation.map(thing => {
              return(
                <tr>

                <td>{thing.criterion}</td>
                {
                [4,3,2,1].map(num=> {
                  if(num === thing.rating){
                    return <td><span style={{backgroundColor:"black", borderRadius:"50%", height:"30px", width:"30px", display:"block", margin:'auto'}}></span></td>
                  } else {
                    return <td></td>
                  }
                })
              }
                </tr>

              )
            })}

        </tbody>
      </Table>

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
  const [data, setData] = useState()

  useEffect(() => {

  function getUserData() {
      axios.get(`http://localhost:3000/applicants/${user_id}`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
        console.log('woohoo')
      })
    }

    if (user_id) {
      getUserData();
    }
  }, [])

  return (



    <Container style={{width:"80%"}}
>
  {data &&
    <>
      <Container className={styles.candidateHeader}>
        <h1>{data.name} <small className={styles.jobTitle}> Full Stack Engineer</small></h1>
      </Container>
      <Container>
        <ControlledTabs data = {data.interview_phases} />
      </Container>

</>}
    </Container>


  )
}

export default Recruiter_Candidate_View;