import React, { useState } from 'react';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings
import { CustomCalendar } from './CustomCalendar';
import { BookingModal } from './Modals/BookingModal';

const { cleaners } = require('./assets/dummy/data.js')

var width = Dimensions.get('window').width; //full width

// TOGGLE VIEWING THE CALENDAR/BOOKING SYSTEM BY MODIFYING THE 'THIS_CLIENT' OBJECT IN DATA.JS
export default function DescriptionScreen({ this_client, route }) {

  // const [cleaner, setCleaner] = useState(null);
  let cleaner = null

  if (route.params?.cleaner_id) {
    console.log(route.params.cleaner_id)
    // setCleaner(cleaners[route.params.cleaner_id])
    cleaner = cleaners[route.params.cleaner_id]
  }
  const [modalVisible, setModalVisible] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = useState({});

  const [date, setDate] = useState(new Date);

  function ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

  return (


    <ScrollView style={{ marginTop: 50, padding: '10%' }}>
      <>

        {cleaner &&
          <>
            <BookingModal modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} />

            <View style={{}}>
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
              // onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
              <Text style={{ marginTop: 6 }}>
                {cleaner.name}
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
                  {cleaner.num_of_cleanings} House Cleanings
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 16 }}>
              <Text style={styles.text} category='h6'>
                About Me
              </Text>

              {cleaner.about_me.map((para, i) => {
                return (
                  <Text key={i} style={{ marginTop: 10 }}>
                    {para}            </Text>
                )
              })}

            </View>

            <View style={{ marginTop: 16 }}>
              {

                // TOGGLE VIEWING THE CALENDAR/BOOKING SYSTEM BY MODIFYING THE 'THIS_CLIENT' OBJECT IN DATA.JS
                !this_client.upcoming_reservation ?

                  <>
                    <Text style={styles.text} category='h6'>
                      Book with me!
                    </Text>
                    <CustomCalendar date={date} setDate={setDate} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                  </>

                  :

                  <>

                    <Card style={styles.card} status='success'>
                      <Text>View My Upcoming Resvervation</Text>
                    </Card>

                  </>

              }
            </View>
          </>

        }
      </>

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
