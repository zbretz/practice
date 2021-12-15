import MyContext from './MyContext';
import React from 'react';


// const USER_DATA = {

//   user_id: 4,
//   match: {
//     user_id: 6,
//     snome_id: [5, 4]
//   },
//   snome_likes: { //the ones ive liked
//     snome_id: 3
//   },
//   // has_liked_me?? would be cool to see. 'who has liked me?'
// }

const messages = [
  {
    id:1,
    recipient:6,
    sender:4,
    time:'1999-01-08 4:05:06',
    message_text:"your place is so cool!",
    has_been_read: true
  },
  {id:2,recipient:6,sender:1,time:'1999-01-08 4:06:06',message_text:"you're gonna love it",has_been_read:true},
  {id:3,recipient:1,sender:6,time:'1999-01-08 4:07:06',message_text:"when do you want to come?",has_been_read:true},
  {id:4,recipient:6,sender:7,time:'1999-01-08 4:08:06',message_text:"i'll recommend some bars",has_been_read:true},
  {id:5,recipient:7,sender:6,time:'1999-01-08 4:09:06',message_text:"can you recommend some restaurants?",has_been_read:true},
  {id:6,recipient:6,sender:1,time:'1999-01-08 4:10:06',message_text:"are you really close to the mountain?",has_been_read:true},
  {id:7,recipient:5,sender:6,time:'1999-01-08 4:11:06',message_text:"let's connect soon",has_been_read:true},
  {id:8,recipient:6,sender:5,time:'1999-01-08 4:12:06',message_text:"can I extend my stay?",has_been_read:false},
  {id:9,recipient:5,sender:6,time:'1999-01-08 4:13:06',message_text:"have you been in town before?",has_been_read:false},
  {id:10,recipient:1,sender:6,time:'1999-01-08 4:14:06',message_text:"see you soon!",has_been_read:false}
]

class UserProvider extends React.Component {
    state = {
        USER_DATA: {
          user_id: 4,
          match: {
            user_id: 6,
            snome_id: [5, 4]
          },
          snome_likes: {
            snome_id: 3
          },
          messages: messages
        }
    };

    render() {
        return (
            <MyContext.Provider
                value={//{
                  {user_data: this.state.USER_DATA}

                    // USER_DATA: this.state.USER_DATA,
                    // user_id: 6,
                    // match: {
                    //     user_id: 6,
                    //     snome_id: [5, 4]
                    //   },
                    //   snome_likes: {
                    //     snome_id: 3
                    //   },
              //  }
              }
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default UserProvider