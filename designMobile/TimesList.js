import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem, Button, Icon } from '@ui-kitten/components';

const data = new Array(8).fill({
  title: 'Item',
  description: 'Description for Item',
});

export const TimesList = ({setModalVisible}) => {

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
    />
  );

  return (
      <>
  
    <Button onPress={() => setModalVisible(false)}>
    Choose Another Day
  </Button>
    <List
      style={styles.container}
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      width: 300
    // maxHeight: 200,
  },
  icon: {
    width: 32,
    height: 32,
  },
});