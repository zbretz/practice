import React from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView, SectionList, ScrollView, ListView, FlatList} from 'react-native';

//Plan:

// -Order messages by date
// -When select a message, highlights 'thread' between user and interlocutor
// --text input pops up to send message which pops to top of stack
// -special message for match? (like a confirm match thing?)
// -clicking message expands it in-place

const messages = [
  {
    id:1,
    recipient:1,
    sender:4,
    time:'1999-01-08 4:05:06',
    message_text:"your place is so cool!",
    has_been_read: true
  },
  {id:2,recipient:4,sender:1,time:'1999-01-08 4:06:06',message_text:"you're gonna love it",has_been_read:true},
  {id:3,recipient:2,sender:5,time:'1999-01-08 4:07:06',message_text:"when do you want to come?",has_been_read:true},
  {id:4,recipient:6,sender:7,time:'1999-01-08 4:08:06',message_text:"i'll recommend some bars",has_been_read:true},
  {id:5,recipient:7,sender:6,time:'1999-01-08 4:09:06',message_text:"can you recommend some restaurants?",has_been_read:true},
  {id:6,recipient:2,sender:1,time:'1999-01-08 4:10:06',message_text:"are you really close to the mountain?",has_been_read:true},
  {id:7,recipient:9,sender:10,time:'1999-01-08 4:11:06',message_text:"let's connect soon",has_been_read:true},
  {id:8,recipient:3,sender:8,time:'1999-01-08 4:12:06',message_text:"can I extend my stay?",has_been_read:false},
  {id:9,recipient:5,sender:2,time:'1999-01-08 4:13:06',message_text:"have you been in town before?",has_been_read:false},
  {id:10,recipient:1,sender:8,time:'1999-01-08 4:14:06',message_text:"see you soon!",has_been_read:false}
]

const Item = ({thing}) => {
  return (
    <Text style={{margin:10, color:'black'}}>{thing}</Text>
  )
}

const MessageScreen = () => {



  const renderItem = (message) => {
    console.log(message)
    return <Item thing = {message.item.recipient}/>
  }

  return (
    // <ListView>
    //   {messages.map((message) => (
    //     <View
    //       className="container"
    //       id="mesages"
    //       key={messages.id}
    //       style={styles.cards}
    //     >



    //     </View>
    //   ))}
    // </ListView>
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};


const styles = {

};


export default MessageScreen;