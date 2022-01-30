const recruitersRouter = require('express').Router();
const { getAllRecruiters, getRecruiterById } = require('../controllers/recruiters');

// recruitersRouter.get('/', getAllRecruiters);
// recruitersRouter.get('/:id', getRecruiterById);

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

  console.log(req.query)

  let react_tab = {
    tab: "React",
    interviewer_name: "Zachary Bretz",
    performance_summary: "As fast as thou shalt wane, so fast thou grow'st, In one of thine, from that which thou departest; And that fresh blood which youngly thou bestow'st, Thou mayst call thine when thou from youth convertest, Herein lives wisdom, beauty, and increase; Without this folly, age, and cold decay: If all were minded so, the times should cease And threescore year would make the world away. Let those whom nature hath not made for store, Harsh, featureless, and rude, barrenly perish:",
    video_file_path: 'video.mp4',
    evaluation: [
      {
      criterion: "Asked Qs when needed",
      rating: "4"
      },{
        criterion: "Met Requirements",
        rating: "3"
      },{
        criterion: "Understood prompt",
        rating: "4"
      }
    ]
  }

  let leetcode_tab = {
    tab: "knjksjndkjndfs",
    interviewer_name: "Zachary Bretz",
    performance_summary: "klmeflmeflm",
    video_file_path: 'video.mp4',
    evaluation: [
      {
      criterion: "Asked Qs when needed",
      rating: "4"
      },{
        criterion: "Met Requirements",
        rating: "3"
      },{
        criterion: "Understood prompt",
        rating: "4"
      }
    ]
  }

  const fake_user_table = {
    user: 'Zachary Bretz',
    user_id: '2',
    interview_phases: {
      React: react_tab,
      Leetcode: leetcode_tab
    }

  }

  res.send(
    react_tab
  )
});


module.exports = recruitersRouter;
