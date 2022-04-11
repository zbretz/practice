import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Card, Text, IconRegistry, Layout, Tab, TabBar } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings
import ListScreen from './ListScreen';
import DescriptionScreen from './DescriptionScreen';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import ClientAccountScreen from './AccountScreens/ClientAccountScreen';
import CleanerAccountScreen from './AccountScreens/CleanerAccountScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const { this_client } = require('./assets/dummy/data.js')
const { this_cleaner } = require('./assets/dummy/data.js')


//Icons info found here: https://stackoverflow.com/questions/61540905/react-native-uikitten-icons-typeerror-undefined-is-not-an-object-evaluating


const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const ProductsScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='CLEANERS' />
    <Tab title='ACCOUNT' />
    <Tab title='PRODUCTS' />
  </TabBar>
);

const TabNavigator = () => (
  <Navigator   style={{marginTop:50}}
  tabBar={props => <TopTabBar {...props} />}>
    <Screen name='Cleaners' component={ListScreen} />
    <Screen name='Account' component={props => <ClientAccountScreen this_client={this_client}/>}/>
    <Screen name='Products' component={ProductsScreen} />
{/* first, maybe rename reservation -> boooking */}
{/* second, maybe the upciming reservation (booking) should get its own screen */}
    {/* <Screen name='Booking' component={ReservationScreen} /> */}


  </Navigator>
);



export default function App() {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
        {/* <ClientAccountScreen this_client={this_client}/> */}
        {/* <CleanerAccountScreen this_cleaner={this_cleaner}/> */}
        {/* <ListScreen/> */}
        {/* <DescriptionScreen this_client={this_client}/> */}
      </ApplicationProvider>
    </>

  )
}

const styles = StyleSheet.create({

});
