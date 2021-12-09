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
import MyProvider from './Context/MyProvider'

export default function App() {

  // sessions handler
  // renders <CreateUser/> if no session is found
  // *remember to uncomment import to use the component*

  return (
    <>
      <MyProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
      </MyProvider>
    </>
  );
}
