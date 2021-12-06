import React from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
  ScrollView,
  Row,
  ImageBackground,
  Dimensions,
  Card,
} from 'react-native';

// for testing purposes
// import card from '../localtestdata/Projects.json';

const styles = {
  cards: {
    width: Dimensions.get('window').width * 0.4,
    height: 450,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flex: 3,
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  //   pic:{
  //     width:Dimensions.get('window').width * 0.4,
  //     height:Dimensions.get('window').height * 0.2,
  //  },
};

const LikesScreen = () => {
  return (
    <ScrollView>
      {/* <Image style={styles.tinyLogo} source={require('../pics/Snome.png')} /> */}
      <Text> Snome Likes </Text>

    </ScrollView>
  );
};

export default LikesScreen;
