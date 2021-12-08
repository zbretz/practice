import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {Dimensions} from 'react-native';

const DATA = [{location: "parkcity"}, {location: "aspen"}, {location: "crestedbutte"}, {location: "alta"}]

const Item = ({ location }) => (
  <View style={styles.item}>
    {/* <Text style={styles.location}>{location}</Text> */}
    <Image style={styles.img} source={require('../img/snome_location_img.jpg')} />
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

  topContainer: {
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  item: {
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginBottom: 16,
    // width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    textAlign: "center",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  img: {
    width: '50%',
    height: '100%',
  },


});

export default MatchScreen

