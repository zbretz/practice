import React from 'react';
import { Card, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { Dimensions, Image } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';// https://openbase.com/js/react-native-ratings


var width = Dimensions.get('window').width; //full width

export default function ClientAccountScreen({this_client}) {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const image = 'https://snome.s3.us-east-2.amazonaws.com/th.jpeg';

    const Header0 = (props) => (
        <View {...props} style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text category='h6'>My Information</Text>
            <Button size='tiny'>edit</Button>

        </View>
    );

    const Header1 = (props) => (
        <View {...props} style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text category='h6'>Notes and Instructions</Text>
            <Button size='tiny'>edit</Button>

        </View>
    );

    const Header2 = (props) => (
        <View {...props} style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text category='h6'>My Upcoming Reservation</Text>
            <Button size='tiny'>edit</Button>

        </View>
    );


    return (
        <ScrollView style={{ marginTop: 50, padding: 10 }}>

            <Text style={{ textAlign: 'center', margin: 10 }} category='h2'>My Account</Text>

            <Image source={{ uri: image }} style={styles.image} />

            <Card style={{ marginTop: 10 }} header={Header0} >

                <Text style={{ marginTop: 6 }}>
                    {this_client.name}
                </Text>
                <Text style={{ marginTop: 6 }}>
                    {this_client.address}
                </Text>


            </Card>

            <Card style={{ marginTop: 10 }} header={Header1} >

                <Text style={{ marginTop: 6 }}>
                    Please do this.
                </Text>
                <Text style={{ marginTop: 6 }}>
                    Please do this.
                </Text>
                <Text style={{ marginTop: 6 }}>
                    Please do this.
                </Text>

            </Card>

            <Card style={{ marginTop: 10 }} header={Header2} >

                <Text style={{ marginTop: 6 }}>
                    My Upcoming Reservation
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
