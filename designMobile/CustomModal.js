import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Icon } from '@ui-kitten/components';
import { TimesList } from './TimesList';
 
export const CustomModal = ({modalVisible, setModalVisible}) => {


    const StarIcon = (props) => (
        <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='close-outline'
        />
    );

  return (
      
    <View style={styles.container}>
{/* 
      <Button onPress={() => setModalVisible(true)}>
        TOGGLE MODAL
      </Button> */}

<Button
                    appearance='ghost'
                    // appearance='outline'
                    style={{ margin: 2, width: 60 ,  flexDirection: 'row', justifyContent:'flex-end'}}
                    onPress={() => setModalVisible(false)}
                    accessoryRight={StarIcon}>
                </Button>

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