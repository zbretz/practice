import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, Layout, Text } from '@ui-kitten/components';

const useCalendarState = (initialState = null) => {
  const [date, setDate] = React.useState(initialState);
  return { date, onSelect: setDate };
};

const filter = (date) => date.getDay() !== 0 && date.getDay() !== 6;

const now = new Date();
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 10);
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10);

export const CustomCalendar = () => {

  const minMaxCalendarState = useCalendarState();
  const filterCalendarState = useCalendarState();
  const boundingCalendarState = useCalendarState();

  return (
    // <Layout style={styles.container} level='1'>

      <View style={styles.calendarContainer}>


        <Calendar style={{width: '100%'}}
          min={yesterday}
          max={tomorrow}
          {...minMaxCalendarState}
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