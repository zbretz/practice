import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CreateUser from '../components/CreateUser';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

const CreateUser = () => {
    return(
        <Text>dfdfd</Text>
    )
}

export default function AuthStack() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />

                <Stack.Screen name="CreateUser"
                    component={CreateUser} />

            </Stack.Navigator>
        </>
    )
}




