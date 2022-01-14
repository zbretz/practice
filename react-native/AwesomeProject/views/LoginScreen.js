import React, { useState, useEffect, useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {Dimensions} from 'react-native';
import UserContext from '../Context/UserContext';


const LoginScreen = () => {

  const context = useContext(UserContext)

  return (
    <>
    {/* <SafeAreaView> */}
    <View style={{width: '100%', height:'100%'}}>
    <Image
    style={{width: '100%',height:'50%', margin:'auto'}}
    source = {require("../img/illustration.svg")}
    />
    <Text>ddfd</Text>
    {/* </SafeAreaView> */}
    </View>
    </>

  );
};


const styles = StyleSheet.create({
  location_info: {
    margin: 6,
  }

});

export default LoginScreen

