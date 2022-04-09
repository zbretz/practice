import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Card, Text, IconRegistry } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings
import ListScreen from './ListScreen';
import DescriptionScreen from './DescriptionScreen';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
const { this_user } = require('./assets/dummy/data.js')

//Icons info found here: https://stackoverflow.com/questions/61540905/react-native-uikitten-icons-typeerror-undefined-is-not-an-object-evaluating

var width = Dimensions.get('window').width; //full width

export default function App() {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <ListScreen/> */}
        <DescriptionScreen this_user={this_user}/>
      </ApplicationProvider>
    </>

  )
}

const styles = StyleSheet.create({

});
