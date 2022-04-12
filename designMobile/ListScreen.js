import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings

const { cleaners } = require('./assets/dummy/data.js')


var width = Dimensions.get('window').width; //full width

export default function ListScreen({ navigation }) {



  function ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <ScrollView style={{ marginTop: 8 }}>

      <Text style={{ width: '100%', textAlign: 'center' }} category={'h1'}>All Cleaners</Text>
      {/* <Text style={{width:'100%', textAlign:'center'}} category={'s1'}>Click to view one of Park City's best house cleaners</Text> */}

      {Object.values(cleaners).map((cleaner, i) => {
        return (
          <Card onPress={() => navigation.navigate('Description', { cleaner_id: cleaner.id })} key={i} style={styles.card}>
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: cleaner.video_uri,
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              shouldPlay
              isMuted
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
              <Text style={{ marginTop: 6 }}>
                {cleaner.name}
              </Text>
              <View>
                <Rating
                  type='heart'
                  ratingCount={5}
                  imageSize={30}
                  startingValue={cleaner.avg_rating}
                  readonly={true}
                  // showRating
                  onFinishRating={ratingCompleted}
                />
                <Text style={{ marginTop: 6, color: '#838383', textAlign: 'right' }}>
                  {cleaner.num_of_cleanings} House Cleanings
                </Text>
              </View>
            </View>
          </Card>
        )
      })}

    </ScrollView>
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
