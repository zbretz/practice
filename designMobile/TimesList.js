import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, List, ListItem, Button, Icon } from '@ui-kitten/components';

const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
});

export const TimesList = ({ setModalVisible }) => {

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.title} ${index + 1}`}
            description={`${item.description} ${index + 1}`}
        />
    );

    const StarIcon = (props) => (
        <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='close-outline'
        />
    );

    return (
        <>
            <View >
                {/* <View style={{ margin: 2, flexDirection: 'row', alignItems:'flex-end'}}/> */}

                <Button
                    appearance='ghost'
                    // appearance='outline'
                    style={{ margin: 2, flexDirection: 'row', justifyContent:'flex-end'}}
                    onPress={() => setModalVisible(false)}
                    // accessoryRight={StarIcon}
                    >
                        <StarIcon/>
                </Button>
                {/* </View> */}
                <List
                    style={styles.container}
                    data={data}
                    ItemSeparatorComponent={Divider}
                    renderItem={renderItem}
                />
            </View>
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