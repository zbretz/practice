import React, {useState} from 'react';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings
import { CustomCalendar } from './CustomCalendar';
import { CustomModal } from './CustomModal';

var width = Dimensions.get('window').width; //full width

export default function DescriptionScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = useState({});

  function ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

  return (
    <ScrollView style={{ marginTop: 50, padding: '10%' }}>
      {/* 
      <Text style={{ marginBottom: 6, fontSize: '30vw', textAlign:'center' }}>
        Cleaner Name
      </Text> */}

      {/* <View style={styles.card}> */}
      <View style={{}}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          shouldPlay
          isMuted
          // onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
        <Text style={{ marginTop: 6 }}>
          Cleaner Name
        </Text>
        <View>
          <Rating
            type='heart'
            ratingCount={5}
            imageSize={30}
            startingValue={4.5}
            readonly={true}
            // showRating
            onFinishRating={ratingCompleted}
          />
          <Text style={{ marginTop: 6, color: '#838383', textAlign: 'right' }}>
            11 House Cleanings
          </Text>
        </View>
      </View>


      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>


      <View style={{ marginTop: 16 }}>
        <Text style={styles.text} category='h6'>
          About Me
        </Text>
        {/* <View style={{ flexDirection: 'row', justifyContent: "space-between" }}> */}
        <Text style={{ marginTop: 6 }}>
          All about me and my story, how I clean and all that. All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.
        </Text>
        <Text style={{ marginTop: 16 }}>
          All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.
        </Text>

      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={styles.text} category='h6'>
          Book with me!
        </Text>
        <CustomCalendar modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </View>
      {/* </View> */}


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  video: {
    // margin: 'auto',
    // width: width - 40,
    // height: (width - 40) * .5635,
    // borderColor: 'blue',
    // borderWidth: 4
    // width: '100%',
    height: width * .45
  }
});
