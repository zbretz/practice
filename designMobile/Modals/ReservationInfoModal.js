import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Icon } from '@ui-kitten/components';
import { TimesList } from '../TimesList';

export const ReservationInfoModal = ({ date, modalVisible, setModalVisible, reservation }) => {

  return (

    <View style={styles.container}>

      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setModalVisible(false)}>
        <Card disabled={true}>
          {reservation && 
          <>
          <Text>{String(reservation.date)}</Text>
          <Text>{String(reservation.status)}</Text>
          <Text>{String(reservation.client)}</Text>
          </>
          }
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