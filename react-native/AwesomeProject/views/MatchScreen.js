import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Dimensions} from 'react-native';

const DATA = [{location: "parkcity"}, {location: "aspen"}, {location: "crestedbutte"}, {location: "alta"}]

const Item = ({ location }) => (
  <View style={styles.item}>
    <Text style={styles.location}>{location}</Text>
  </View>
);

const MatchScreen = () => {

  const renderItem = ({ item }) => (
    <Item location={item.location} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.location}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  SnomeLogo: {
    padding:18,
    backgroundColor: "powderblue",
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 60,
  },
  topContainer: {
    // flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  location: {
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginBottom: 16,
    // width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },

});

export default MatchScreen

