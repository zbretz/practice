import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native';


export default function App() {
  const [serverState, setServerState] = React.useState('Loading...');
  const [messageText, setMessageText] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(true);
  const [inputFieldEmpty, setInputFieldEmpty] = React.useState(true);
  const [serverMessages, setServerMessages] = React.useState([]);
  var ws = React.useRef(new WebSocket('ws://10.0.0.53:8080')).current;

  const user_id = 2


  React.useEffect(() => {
    const serverMessagesList = [];
    ws.onopen = () => {
      setServerState('Connected to the server')
      setDisableButton(false);
      // ws.send(user_id)
      // ws.send(JSON.stringify({connected: false, id: user_id}))
      ws.send(JSON.stringify({source: 'client', id: user_id}))

    };
    ws.onclose = (e) => {
      setServerState('Disconnected. Check internet or server.')
      setDisableButton(true);
    };
    ws.onerror = (e) => {
      setServerState(e.message);
    };
    ws.onmessage = (e) => {
      serverMessagesList.push(e.data);
      setServerMessages([...serverMessagesList])
    };
  }, [])
  const submitMessage = () => {
    ws.send(messageText + '3' + '1');
    setMessageText('')
    setInputFieldEmpty(true)
  }
  return (
   <View style={styles.container}>
     <View style={{
        height: 30,
        backgroundColor: '#eeceff',
        padding: 5
      }}>
       <Text>{serverState}
       !</Text>
     </View>
     <View style={{
        backgroundColor: '#ffeece',
        padding: 5,
        flexGrow: 1
      }}>
       <ScrollView>
          {
            serverMessages.map((item, ind) => {
              return (
               <Text key={ind}>{item}</Text>
              )
            })
          }
       </ScrollView>
     </View>
     <View style={{
        flexDirection: 'row',
      }}>
       <TextInput style={{
            borderWidth: 1,
            borderColor: 'black',
            flexGrow: 1,
            padding: 5,
          }}
          placeholder={'Add Message'}
          onChangeText={text => {
            setMessageText(text)
            setInputFieldEmpty(text.length > 0 ? false : true)
          }}
          value={messageText}
         />
       <Button
         onPress={submitMessage}
         title={'Submit'}
         disabled={disableButton || inputFieldEmpty}
        />
     </View>

   </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 30,
    padding: 8,
  },

});
