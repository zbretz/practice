import React, { useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import styles from './styles/recruiterCandidateView.module.css'

const data = {
  tab: "React",
  interviewer_name: "Zachary Bretz",
  performance_summary: "As fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:",
  video_file_path: 'video.mp4',
  evaluation: [
    {
    criterion: "Asked Qs when needed",
    rating: 4
    },{
      criterion: "Met Requirements",
      rating: 3
    },{
      criterion: "Understood prompt",
      rating: 4
    }
  ]
}

function ControlledTabs() {
  const [key, setKey] = useState('home');

  console.log(data.evaluation.length)

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Candidate Profile">
        <div>As fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:</div>
      </Tab>
      <Tab eventKey="react" title={data.tab}>
      <h2>Frontend Interview (React)</h2>

      {/* <Container> */}
        <h5 style={{marginTop: "30px"}}  >Interviewer: {data.interviewer_name}</h5>
      {/* </Container> */}

      <div>
        <h5  style={{marginTop: "30px"}}>Performance Summary</h5>
        <div>{data.performance_summary}</div>
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
            {data.evaluation.map(thing => {
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
        <Tab eventKey="leetcode" title="Leetcode">
        <div>As fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:</div>      </Tab>
        <Tab eventKey="behavioral" title="Behavioral">
        <div>As fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:</div>      </Tab>
        <Tab eventKey="system" title="System Design">
        <div>As fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:</div>      </Tab>
    </Tabs>
  );
}

const Recruiter_Candidate_View = () => {

  // useEffect(()=>{
  //   fakeAxios => data =>
  //   setData(dummy)
  // })

  return (
    <>
    <Container style={{width:"80%"}}
>
    {/* className={styles.body} */}
      <Container className={styles.candidateHeader}>
        <h1>Firstname Lastname <small className={styles.jobTitle}> Full Stack Engineer</small></h1>
      </Container>
      <Container>
        <ControlledTabs />
      </Container>
    </Container>
    </>

  )
}

export default Recruiter_Candidate_View;