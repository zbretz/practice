import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings


var width = Dimensions.get('window').width; //full width

var card_count = 5


export default function App() {


  function ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ScrollView style={{marginTop:50}}>

        {[...Array(2)].map((e, i) => {
          return (
            <Card key={i} style={styles.card}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                // source={require('./assets/SED.mp4')}
                useNativeControls
                resizeMode="contain"
                isLooping
                shouldPlay
                isMuted
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
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
                  <Text style={{ marginTop: 6, color: '#838383', textAlign:'right'}}>
                    11 House Cleanings
                  </Text>
                </View>
              </View>
            </Card>
          )
        })}






      </ScrollView>
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
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
    // width: width - 40,
    // height: (width - 40) * .5635,
    // borderColor: 'blue',
    // borderWidth: 4
    width: width * .8,
    height: width * .45
  }
});
