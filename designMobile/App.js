import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings
import ListScreen from './ListScreen';


var width = Dimensions.get('window').width; //full width

var card_count = 5


export default function App() {

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ListScreen />
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  
});
