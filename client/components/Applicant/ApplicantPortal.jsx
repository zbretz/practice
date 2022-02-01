import React, { useRef, useState, useEffect } from 'react';
import { Switch, Route, Link, NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Tab, Tabs } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext.js'
import ApplicantInformation from './ApplicantInformation.jsx';

const axios = require('axios');

const ApplicantPortal = () => {

  // state to store which tab is home
  const [key, setKey] = useState('home')
  
  // state to store data fromo backend
  const [applicantData, setApplicantData] = useState({});

  useEffect(() => {
    getApplicantData();
  }, [])

  const getApplicantData = (candidate_id) => {
    // This data will represent how the backend should be sending the data to the front for the applicant side
    axios.get('data.json')
      .then((res) => {
        let data = res.data;
        setApplicantData(data);
      })
      .catch((err) => console.log('err', err));
  }

  const history = useHistory()
  const { userSignOut} = useAuth()

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
    history.push('/')
  }

  return (
    <Container>
      <Button type='submit' onClick={handleSignOut}>Sign Out</Button>
      <h1> Applicant Portal </h1>
      {Object.keys(applicantData).length > 0 ? 
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className='mb-3'
        >
          <Tab eventKey={'home'} title={'Candidate Profile'}>
            <ApplicantInformation 
              isProfile={true}
              name={applicantData.ProfileInfo.Name}
              role={applicantData.ProfileInfo.Role}
              location={applicantData.ProfileInfo.Preferred_Location}
              skills={applicantData.ProfileInfo.Skills}
            />
          </Tab>
          <Tab eventKey={'react'} title={'React'}>
            <ApplicantInformation 
              interview_title={applicantData.React_Interview.Interview_title} 
              interviewer={applicantData.React_Interview.Interviewer}
              performance_sum={applicantData.React_Interview.Performance_Summary}
            />
          </Tab>
          <Tab eventKey={'leetcode'} title={'LeetCode'}>
            <ApplicantInformation 
              interview_title={applicantData.Leetcode.Interview_title} 
              interviewer={applicantData.Leetcode.Interviewer}
              performance_sum={applicantData.Leetcode.Performance_Summary}
            />
          </Tab>
          <Tab eventKey={'behavioral'} title={'Behavioral'}>
            <ApplicantInformation 
              interview_title={applicantData.Behavioral.Interview_title} 
              interviewer={applicantData.Behavioral.Interviewer}
              performance_sum={applicantData.Behavioral.Performance_Summary}
            />
          </Tab>
          <Tab eventKey={'system_design'} title={'System Design'}>
            <ApplicantInformation 
              interview_title={applicantData.System_Design.Interview_title} 
              interviewer={applicantData.System_Design.Interviewer}
              performance_sum={applicantData.System_Design.Performance_Summary}
            />
          </Tab>
        </Tabs> 
      : 
      <></>
      }
    </Container>
  )
}

export default ApplicantPortal