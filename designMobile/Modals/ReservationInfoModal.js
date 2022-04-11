import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Icon } from '@ui-kitten/components';
import { TimesList } from '../TimesList';
import moment from 'moment';

export const ReservationInfoModal = ({ modalVisible, setModalVisible, reservation }) => {

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const Header0 = (props) => (
    <View {...props} style={{ padding: 12, width: '100%' }}>
      <Text category='h5' style={{ textAlign: 'center' }}>{capitalize(reservation.status)} Reservation</Text>
    </View>
  );

  const Footer = (props) => (

    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 20, paddingHorizontal: 30 }}>
      <Button appearance='filled' style={{ flex: 1, margin: 2 }}>Confirm</Button>
      <Button appearance='outline' style={{ flex: 1, margin: 2 }}>Reject</Button>
    </View>
  );

  return (

    <View style={styles.container}>
      {reservation.status === 'pending' &&

        <Modal
          visible={modalVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setModalVisible(false)}>
          <Card disabled={true} header={Header0} footer={Footer}>
            {reservation &&
              <>

                <Text category='h6'>{moment(reservation.date).format('dddd MMM Do')}</Text>
                <Text category='s1' style={{ marginVertical: 6 }}>{String(reservation.client.name)}</Text>
                <Text style={{ marginVertical: 6 }}>{String(reservation.client.address)}</Text>
                <Text style={{ marginVertical: 6 }}>{String(reservation.client.special_instructions)}</Text>

              </>
            }
          </Card>
        </Modal>
      }

      {(reservation.status === 'confirmed' || reservation.status === 'completed') &&

        <Modal
          visible={modalVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setModalVisible(false)}>
          <Card disabled={true} header={Header0}>
            {reservation &&
              <>

                <Text>{String()}</Text>
                <Text>{moment(reservation.date).format('dddd MMM Do')}</Text>
                <Text>{String(reservation.client.name)}</Text>
                <Text>{String(reservation.client.address)}</Text>
                <Text>{String(reservation.client.special_instructions)}</Text>

              </>
            }
          </Card>
        </Modal>
      }

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