import React, {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import SnomeHome from '../views/SnomeHome';
// import TownsScreen from '../screens/TownsScreen';
import MatchScreen from '../views/MatchScreen';
import LikesScreen from '../views/LikesScreen';
import MessageScreen from '../views/MessageScreen';
import Messages2 from '../views/Messages2';
import SnomeDescription from '../views/SnomeDescription';

import UserContext from '../Context/UserContext';

// import ProfileScreen from '../screens/ProfileScreen';

const TAB_ICON = {
    Home: 'home',
    Towns: 'home',
    Likes: 'favorite-outline',
    Match: 'swap-calls',
    Message: 'messenger-outline',
    Profile: 'account-box',
};

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];

    return {
        tabBarIcon: () => (
          <MaterialIcons style={styles.icon} name={iconName} />
        )
    }
}

export const AppNavigator = () => {

    const context = useContext(UserContext)

    return (
    <>
      <Tab.Navigator
        screenOptions={createScreenOptions}
      >
        {context.user_data.is_logged_in &&
        <>
        <Tab.Screen name="Messages2" component={Messages2}/>
        <Tab.Screen name="Likes" component={LikesScreen}/>
        <Tab.Screen name="Message" component={MessageScreen}/>
        <Tab.Screen name="Match" component={MatchScreen}/>
        <Tab.Screen name="Home" component={SnomeHome}/>
        </>
        }
        <Tab.Screen name="Description" component={SnomeDescription}/>
        {/* <Tab.Screen name="Towns" component={TownsScreen}/>
        <Tab.Screen name="Message" component={MessageScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/> */}
      </Tab.Navigator>
    </>
    )
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor:'gray',
    padding:10
  }
})
