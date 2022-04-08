import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width


export default function App() {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ScrollView >
        <Card style={styles.card}>
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
          <Text>
            My Name
          </Text>
        </Card>
        <Card style={styles.card}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            shouldPlay
            isMuted
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
          <Text>
            My Name
          </Text>
        </Card>
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
    width: width - 40,
    height: (width - 40) * .5635,
  }
});
