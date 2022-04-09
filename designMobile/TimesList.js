import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Divider, List, ListItem, Button, Icon, Text } from '@ui-kitten/components';
import moment from 'moment';
const { appointments } = require ('./assets/dummy/data.js')


const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
});



export const TimesList = ({date, setModalVisible }) => {

    let moment_date = moment(date).format('dddd MMM Do')
    console.log(moment_date)


    
    const renderItem = ({ item }) => (
        <ListItem
            // title={`${item.title} ${index + 1}`}
            // description={`${item.description} ${index + 1}`}
            title={`${item.time}`}
            description={`${item.is_available}`}
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
            <View>
                {/* <View style={{ margin: 2, flexDirection: 'row', alignItems:'flex-end'}}/> */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text category='h4' style={{}}>{moment_date}</Text>
                    <Button
                        appearance='ghost'
                        // appearance='outline'
                        style={{ margin: 2, flexDirection: 'row', justifyContent: 'flex-end' }}
                        onPress={() => setModalVisible(false)}
                    // accessoryRight={StarIcon}
                    >
                        <StarIcon />
                    </Button>
                </View>

                <Text category='h6' style={{}}>
                    Select a Time
                </Text>


                {/* </View> */}
                <List
                    style={styles.container}
                    data={appointments[1]}
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