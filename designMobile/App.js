import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Card, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Video, AVPlaybackStatus } from 'expo-av';


export default function App () {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
  <ApplicationProvider {...eva} theme={eva.light}>
  <Card style={styles.card}>
    <Text>
    UI Kitten
    </Text>
  </Card>
  
  </ApplicationProvider>
  )
}
const styles = StyleSheet.create({
  card: {
    margin: 10
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
});
