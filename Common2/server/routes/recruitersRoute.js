const recruitersRouter = require('express').Router();
const { getAllRecruiters, getRecruiterById } = require('../controllers/recruiters');

// recruitersRouter.get('/', getAllRecruiters);
// recruitersRouter.get('/:id', getRecruiterById);

recruitersRouter.get('/', (req, res) => {
  res.send(
    {
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
  )
});


module.exports = recruitersRouter;
