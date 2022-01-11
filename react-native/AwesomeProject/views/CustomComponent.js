import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import axios from 'axios';
import styled from 'styled-components'



export default function CreateUser(props) {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    first: '',
    state: ''
  });

  const [info, setInfo] = React.useState(null);

  const CustomInput = ({obj_key}) => {

    const [text, setText] = React.useState("stuff");
    const [obj, setObj] = React.useState({
      first: "",
      second: ""
    });
    console.log(typeof obj_key)
    console.log(obj)

    const handleChange = (str) => {
      setText(str)
      setObj({
        ...obj,
        [obj_key]: str
      })
    }

    return(
      <>
      <Text>{text}</Text>
      <Text>{obj.first}</Text>

          <TextInput
             id="name"
             placeholder="Name"
             type="text"
              // value={formData.first}
             value={text}
             onChangeText={handleChange}
           />

      {/* <TextInput id="name" type="text" value={text} onChangeText={setText}/> */}
      {/* <Text>{props.thing}</Text> */}
      {/* <Text>{text}</Text> */}
      </>
    )
  }

  return (

    <CustomInput obj_key="first"/>

  );
}

