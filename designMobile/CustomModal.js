import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { TimesList } from './TimesList';
 
export const CustomModal = ({modalVisible, setModalVisible}) => {


  return (
      
    <View style={styles.container}>
{/* 
      <Button onPress={() => setModalVisible(true)}>
        TOGGLE MODAL
      </Button> */}

      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setModalVisible(false)}>
        <Card disabled={true}>
        <TimesList setModalVisible={setModalVisible}/>

        </Card>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //   width: '100%',
    // minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});