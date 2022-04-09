import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, Layout, Text } from '@ui-kitten/components';
// import moment from 'moment';

const filter = (date) => date.getDay() !== 0 && date.getDay() !== 6;

const now = new Date();
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 10);
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10);

export const CustomCalendar = ({date, setDate, setModalVisible }) => {

    return (
        // <Layout style={styles.container} level='1'>

        <View style={styles.calendarContainer}>

            <Calendar style={{ width: '100%' }}
                date={date}
                min={yesterday}
                max={tomorrow}
                onSelect={date => {
                    console.log(date)
                    setDate(date)
                    setModalVisible(true)
                }
                }
            />
        </View>

        // </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    calendarContainer: {
        marginTop: 16,
        margin: 2,
    },
    text: {
        marginVertical: 8,
    },
});