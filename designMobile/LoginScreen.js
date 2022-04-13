import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings




export default function LoginScreen() {

  return (
    <><Text style={{ width: '100%', textAlign: 'center', marginTop:50 }} category={'h1'}>Login</Text>
    </>

  )
}

const styles = StyleSheet.create({

});
