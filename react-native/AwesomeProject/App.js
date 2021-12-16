// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import FlexDirectionBasics from './views/FlexDirectionBasics';
// import SnomeHome from './views/SnomeHome';


// const App = () => {
//   // return <FlexDirectionBasics></FlexDirectionBasics>
//   return <SnomeHome></SnomeHome>
// }

// export default App;


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './src/screens/TownsScreen';
// import CreateUser from './src/components/CreateUser';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { Navigation } from './navigation';
import UserProvider from './Context/UserProvider'

export default function App() {

  console.log('test1')
  console.log(Date.now())

  // sessions handler
  // renders <CreateUser/> if no session is found
  // *remember to uncomment import to use the component*

  return (
    <>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
        <StatusBar style="auto" />
      </UserProvider>
    </>
  );
}
