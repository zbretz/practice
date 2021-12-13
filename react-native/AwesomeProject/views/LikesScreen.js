import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import {Dimensions} from 'react-native';

const LikesScreen = () => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <ScrollView>
    <Grid
      values={["parkcity", "aspen", "crestedbutte", "alta", "vail", "telluride"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
    </Grid>
    </ScrollView>
//     <>
//     <ScrollView>
//     <View style={{height:300, backgroundColor:'black', marginBottom:20}}>

//     </View>
//         <View style={{height:300, backgroundColor:'black', marginBottom:20}}>

//         </View>

//             </ScrollView>
//             <View style={{height:300, backgroundColor:'black', marginBottom:20}}>

// </View>
//             </>

  );
};

const Grid = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>

    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.location,
          ]}
        >
          <>
          <Text
            style={{height: '80%',}}
          >
            {value}
          </Text>
          <View>
            <Text style={{height: '20%', backgroundColor:'gray'}}>
              description etc
            </Text>
          </View>
          </>
        </TouchableOpacity>
      ))}
    </View>

  </View>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  location: {
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginBottom: 16,
    width: 150,//Dimensions.get('window').width * 0.4,
    height: 150, //Dimensions.get('window').width * 0.2,
    textAlign: "center",
  },
});

export default LikesScreen

