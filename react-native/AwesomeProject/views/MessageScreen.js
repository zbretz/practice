import React, { useState, useEffect } from "react";
import {View, Text, TextInput, StyleSheet, SafeAreaView, SectionList, ScrollView, ListView, FlatList, TouchableOpacity} from 'react-native';

//Plan:

// -Order messages by date
// -When select a message, highlights 'thread' between user and interlocutor
// --text input pops up to send message which pops to top of stack
// -special message for match? (like a confirm match thing?)
// -clicking message expands it in-place


// Next Steps:
// - Expand message to display more text
// - select message thread -> input text -> appear message

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

const MessageCard = ({message, selectedUser, setSelectedUser, selectedRecipient, setSelectedRecipient, findOtherUser, otherUser}) => {

  // <View style={[styles.card, message.sender === 6 && styles.this_user, (message.sender !==6 && message.sender === selectedUser) && styles.selectedUser]}
  // >

  return (
    <>
    <TouchableOpacity onPress={()=>  {
      return (
      findOtherUser(message.sender, message.recipient)
      // setSelectedUser(message.sender),
      // setSelectedRecipient(message.recipient)
      )
    }
      }>
      <View style={[
        styles.card,
        message.sender === 6 && styles.this_user,
        (message.sender !== 6 && message.sender === selectedUser) && styles.selectedUser,
        (message.sender === 6 && message.recipient === selectedUser) && styles.selectedConvo,
        (selectedUser === 6 && message.sender === selectedRecipient) && styles.selectedUser,
        (selectedUser === 6 && message.recipient === selectedRecipient) && styles.selectedConvo,
      ]}
      >
        {/* <Text>{selectedRecipient}</Text>
        <Text>{selectedUser}</Text> */}
        <Text>{otherUser}</Text>
        <Text>message_sender: {message.sender}</Text>
        <Text>messgae_recipient: {message.recipient}</Text>
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
  },
  selectedConvo: {
    backgroundColor: '#96cbff'
  },
  input: {
    height: 60,
    lineHeight:20,
    borderWidth: 2,
    borderColor: '#e1861b',
    padding: 10,
    backgroundColor: "white",
  }
};

const MessageScreen = () => {

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [otherUser, setOtherUser] = useState("")

  const findOtherUser = (sender, recipient) => {
    setSelectedUser(sender)
    setSelectedRecipient(recipient)
    setOtherUser(sender === 6 ? recipient : sender)
  }

  // const [showDropdown, setShowDropdown] = useState("show")

  const renderItem = ({item}) => {
    // console.log(item)
    return <MessageCard message={item} selectedUser={selectedUser} setSelectedUser={setSelectedUser} selectedRecipient = {selectedRecipient} setSelectedRecipient={setSelectedRecipient} findOtherUser={findOtherUser} otherUser={otherUser}/>
  }

  return (
    <>
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    <View>
      <TextInput
        value={'dfdfd jhg khkhj lkh fdfdfd'}
        style={styles.input}
        />
    </View>
    </>
  );
};


export default MessageScreen;