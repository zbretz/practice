import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { Dimensions, Image } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings


var width = Dimensions.get('window').width; //full width

export default function AccountScreen() {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const image = 'https://snome.s3.us-east-2.amazonaws.com/th.jpeg';

    return (
        <ScrollView style={{ marginTop: 50, padding: 10 }}>

            <Text style={{ textAlign: 'center', margin: 10 }} category='h2'>My Account</Text>

            <Image source={{ uri: image }} style={styles.image} />


            <Card style={{ marginTop: 10 }}>

                <Text style={{ marginTop: 6, marginLeft: 0 }}>
                    My Name
                </Text>

                <Text style={{ marginTop: 6 }}>
                    My Address
                </Text>

            </Card>
            <Card style={{ marginTop: 10 }}>

                <Text style={{ marginTop: 6 }}>
                    Notes and Instructions
                </Text>


            </Card>
            <Card style={{ marginTop: 10 }}>

                <Text style={{ marginTop: 6 }}>
                    My Upcoming Resvervation
                </Text>


            </Card>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',//width * .8,
        height: width * 0.6,
        resizeMode: 'cover'
    },

    card: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
