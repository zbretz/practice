import React, { useEffect, useState } from 'react';

const ApplicantInformation = ({ isProfile, name, role, location, skills, interview_title, interviewer, performance_sum }) => {

  const [isProfileView, setIsProfileView] = useState(false);

  useEffect(() => {
    setIsProfileView(isProfile);
  })

  return (
    <div>
      {isProfileView ? 
        <div>
          <h2>{name} <span style={{ fontSize: '25px' }}>{role} Engineer</span></h2>
          <h5>Preferred Location: {location}</h5>
          <h5>Skills: {skills}</h5>
        </div>
        :
        <div>
          <h2>{interview_title}</h2>
          <h5 style={{marginTop: "30px"}}>Interviewer: {interviewer} </h5>
          <h5>Performance Summary</h5>
          <p>{performance_sum}</p>
        </div>  
      }
    </div>  
  )

}

export default ApplicantInformation;