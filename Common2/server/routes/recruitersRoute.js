const recruitersRouter = require('express').Router();
const { getAllRecruiters, getRecruiterById } = require('../controllers/recruiters');

// recruitersRouter.get('/', getAllRecruiters);
// recruitersRouter.get('/:id', getRecruiterById);

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

recruitersRouter.get('/all', (req, res) => {

  const data = {
    candidates:
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
  }

  res.send(data)
});

recruitersRouter.get('/byId', (req, res) => {

  console.log(req.query.id)

  const fake_user_table = {
    1: {
      user_name: 'Jose',
      interview_phases: {
        React: react_tab_jose,
        Leetcode: leetcode_tab_jose
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

  // for test tabs
  res.send(
    fake_user_table[req.query.id].interview_phases
  )

  // res.send(
  //   fake_user_table[req.query.id].interview_phases.React
  // )
});


module.exports = recruitersRouter;
