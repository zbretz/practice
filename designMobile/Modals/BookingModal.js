import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Icon } from '@ui-kitten/components';
import { TimesList } from '../TimesList';

export const BookingModal = ({date, modalVisible, setModalVisible}) => {

  return (
      
    <View style={styles.container}>

      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setModalVisible(false)}>
        <Card disabled={true}>
        <TimesList date={date} setModalVisible={setModalVisible}/>

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