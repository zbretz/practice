

let candidate_profile_jose = {
  tab: "Profile",
  interviewer_name: "Zachary Bretz",
  performance_summary: "All about Jose! As fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:",
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

let phone_screen_jose = {
  tab: "Screen",
  interviewer_name: "Zachary Bretz",
  performance_summary: "JOSE LEETCODE PERF SUMMARY",
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

let react_tab_jose = {
  tab: "React",
  interviewer_name: "Zachary Bretz",
  performance_summary: "JOSE REACT PERF SUMMARY JOSE LEETCODE PERF SUMMARYAs fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:",
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

let leetcode_tab_jose = {
  tab: "Leetcode",
  interviewer_name: "Zachary Bretz",
  performance_summary: "JOSE LEETCODE PERF SUMMARY",
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

let behavioral_tab_jose = {
  tab: "Behavioral",
  interviewer_name: "Zachary Bretz",
  performance_summary: "JOSE LEETCODE PERF SUMMARY",
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

let system_design_jose = {
  tab: "Sys Design",
  interviewer_name: "Zachary Bretz",
  performance_summary: "JOSE LEETCODE PERF SUMMARY",
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



let react_tab_zach = {
  tab: "ReactZACH",
  interviewer_name: "Zachary BretzZACH",
  performance_summary: "Azach react perf summary",
  video_file_path: 'video.mp4',
  evaluation: [
    {
    criterion: "Asked Qs when needed",
    rating: 2
    },{
      criterion: "Met Requirements",
      rating: 1
    },{
      criterion: "Understood prompt",
      rating: 2
    }
  ]
}

let leetcode_tab_zach = {
  tab: "LeetcodeZACH",
  interviewer_name: "Zachary BretzZACH",
  performance_summary: "zach leetcode performance summary",
  video_file_path: 'video.mp4',
  evaluation: [
    {
    criterion: "Asked Qs when needed",
    rating: 4
    },{
      criterion: "Met Requirements",
      rating: 4
    },{
      criterion: "Understood prompt",
      rating: 1
    }
  ]
}


const fake_user_table = {
  1: {
    user_name: 'Jose Solis',
    interview_phases: {
      Candidate_Profile: candidate_profile_jose,
      Screen: phone_screen_jose,
      React: react_tab_jose,
      Leetcode: leetcode_tab_jose,
      Behavioral: behavioral_tab_jose,
      System_Design: system_design_jose
    }
  },
  2: {
    user_name: 'Zachary Bretz',
    interview_phases: {
      React: react_tab_zach,
      Leetcode: leetcode_tab_zach
    }
  },
}


// lenora
const applicants = {
  1:{
    id: 1,
    user_id: "007",
    experience: "1 year",
    linkedIn: "fakeperson@linkedin.com",
    school: "Hack Reactor",
    desired_position: "Full-stack Developer",
    desired_industry:"Tech",
    desired_company_size: "Small",
    desired_company_stage: "Start Up",
    desired_region: "Remote",
    resume: "/myresume/fakeperson",
    role: "applicant",
    email: "test5@test.com",
    password: "yeqpuUbjdsTMYEfD3OcjwEL7AAk1",
    name: "Bob Saget"
  },
  2:{
    id: 2,
    user_id: "007",
    experience: "1 year",
    linkedIn: "fakeperson@linkedin.com",
    school: "Hack Reactor",
    desired_position: "Full-stack Developer",
    desired_industry:"Tech",
    desired_company_size: "Small",
    desired_company_stage: "Start Up",
    desired_region: "Remote",
    resume: "/myresume/fakeperson",
    role: "recruiter",
    email: "test5@test.com",
    password: "yeqpuUbjdsTMYEfD3OcjwEL7AAk1",
    name: "Robert Saget"
  }
}

// zach
const candidates = //{
  // candidates:
  [
    {
      id: 1,
      name:"Jose Solis",
      position: "Full Stack Engineer",
      background: "Bootcamp Graduate",
      review_blurb: "Strong Front End skills. Strong Implementation. Solid data structure aptitude.",
    },
    {
      id: 2,
      name:"Zachary Bretz",
      position: "Full Stack Engineer",
      background: "Bootcamp Graduate",
      review_blurb: "Interested in team management. Underwhelming leetcode performance. Strong system design.",
    }
  ]
// }



module.exports = {fake_user_table, candidates}