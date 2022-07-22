import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Video } from 'expo-av';

var width = Dimensions.get('window').width; //full width


export default function App() {
  return (
    <>
      <View style={{ display:'flex', alignItems:'center',justifyContent:'center', marginTop:50, height: 100}}>
        <Text style={{height:50}}>Events this Week</Text>
      </View>
      <ScrollView stickyHeaderIndices={[0]} contentContainerStyle={styles.container}>
      <View style={{ display:'flex', height:70, alignItems:'center',justifyContent:'center', backgroundColor:'rgba(0,0,0,0)'}}>
        <Text style={{color: 'white',marginTop:25, fontSize:30}}>Today</Text>
      </View>
        <Video shouldPlay isLooping style={{ height: 700, width:'100%'}}  resizeMode="cover" source={require('./assets/event10.mp4')}></Video>
        <Video shouldPlay isLooping style={{ height: 700, width: '100%'}} resizeMode="cover" source={require('./assets/event11.mp4')}></Video>
        <Video shouldPlay isLooping style={{ height: 700, width: '100%'}} resizeMode="cover" source={require('./assets/event12.mp4')}></Video>
        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
  
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // height: 3000,
    // justifyContent: 'center',
  },
});
