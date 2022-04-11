import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Icon } from '@ui-kitten/components';
import { TimesList } from '../TimesList';
import moment from 'moment';

export const ReservationInfoModal = ({ modalVisible, setModalVisible, reservation }) => {

  return (


    <View style={styles.container}>
      {reservation.status === 'pending' &&

        <Modal
          visible={modalVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setModalVisible(false)}>
          <Card disabled={true}>
            {reservation &&
              <>

                <Text>{String()}</Text>
                <Text>{moment(reservation.date).format('dddd MMM Do')}</Text>
                <Text>{String(reservation.client.name)}</Text>
                <Text>{String(reservation.client.address)}</Text>
                <Text>{String(reservation.client.special_instructions)}</Text>

                <Button>Confirm this Reservation</Button>

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
          <Card disabled={true}>
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