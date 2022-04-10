import React, { useState } from 'react';
import { Card, Text, Button, List } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings
import { CustomCalendar } from './CustomCalendar';
import { CustomModal } from './CustomModal';

var width = Dimensions.get('window').width; //full width

export default function DescriptionScreen({ this_cleaner }) {

  const renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  const data = new Array(8).fill({
    title: 'Item',
  });

  console.log(this_cleaner)

  const [modalVisible, setModalVisible] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = useState({});

  const [date, setDate] = useState(new Date);

  const Header0 = (props) => (
    <View {...props} style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text category='h6'>My Information</Text>
        <Button size='tiny'>edit</Button>

    </View>
);

  const Header2 = (props) => (
    <View {...props} style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{ width: '100%', textAlign: 'center' }} category='h6'>My Upcoming Reservations</Text>
    </View>
  );

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item.title} {info.index + 1}
      </Text>
    </View>
  );

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status='basic'
     >
       <View style={{paddingVertical:0, flexDirection: 'row', justifyContent: "space-between" }}>
       <Text style={{paddingVertical:0}} >Date</Text>
       <Button style={{paddingVertical:0}} size='tiny'>FOLLOW</Button>
       </View>
       
    </Card>
  );

  return (

    <ScrollView style={{ marginTop: 50, padding: '10%' }}>


      <Text style={{ textAlign: 'center', margin: 10 }} category='h2'>My Account</Text>

      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} />

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
{/* 
      <Card status='basic'>
        <View style={[{ flexDirection: 'row', justifyContent: "space-between" }]}>
          <Text style={{ color: 'rgb(180, 181, 184)' }}>Pending:</Text>
          <Text>Date</Text>
        </View>
      </Card> */}

      <Card style={{ marginTop: 10 }} header={Header2} >


        <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
        {/* <ScrollView style={{ height: 200 }}>
        <Card accessoryRight={renderItemAccessory} style={styles.card} status='basic'>
            <Text>Date</Text>
          </Card>
          <Card style={styles.card} status='success'>
            <Text>Date</Text>
          </Card>
          <Card style={styles.card} status='success'>
            <Text>Date</Text>
          </Card>
          <Card style={styles.card} status='success'>
            <Text>Date</Text>
          </Card>
        </ScrollView> */}

      </Card>



      <Card style={{ marginTop: 10 }} header={Header0} >

<Text style={{ marginTop: 6 }}>
    {this_cleaner.name}
</Text>
<Text style={{ marginTop: 6 }}>
    {this_cleaner.about_me}
</Text>


</Card>


      {/* </View> */}


    </ScrollView>
  )
}

const styles = StyleSheet.create({
    item: {
    marginVertical: 2,
  },
  contentContainer: {
    // paddingHorizontal: 8,
    paddingVertical: 4,
    paddingHorizontal: 0
  },
  card: {
    margin: 10,
    // marginHorizontal: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 4,
    height: 200,
    // paddingHorizontal: 0
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
