import React, { useState, useEffect } from "react";
import {View, Text, TextInput, StyleSheet, SafeAreaView, SectionList, ScrollView, ListView, FlatList, TouchableOpacity} from 'react-native';

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

const MessageCard = ({message, selectedUser, setSelectedUser}) => {

  return (
    <>
    <TouchableOpacity onPress={()=>setSelectedUser(message.sender)}>
      <View style={[styles.card, message.sender === 6 && styles.this_user, message.sender === selectedUser && styles.selectedUser]}
      >
        {/* <Text>{selectedUser}</Text> */}
        <Text>username: {message.sender}</Text>
        <Text>{message.time}</Text>
        <Text>{message.message_text}</Text>
      </View>
    </TouchableOpacity>
    </>
  )
}


const styles = {
  this_user: {
    borderColor: '#1e90ff',
    textAlign: 'right'
  },
  card: {
    margin:4,
    borderWidth: 2,
    borderColor: '#ff4500'
  },
  selectedUser: {
    backgroundColor: '#ffbaa1'
  }
};

const MessageScreen = () => {

  const [selectedUser, setSelectedUser] = useState("");
  // const [showDropdown, setShowDropdown] = useState("show")

  const renderItem = ({item}) => {
    // console.log(item)
    return <MessageCard message={item} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
  }

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};


export default MessageScreen;