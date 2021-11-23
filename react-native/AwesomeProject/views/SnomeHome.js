import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import {Dimensions} from 'react-native';

const FeaturedLocations = () => {
  const [flexDirection, setflexDirection] = useState("column");
  const [toggleView, settoggleView] = useState("MapView");

  return (
    <Grid
      label="flexDirection"
      values={["parkcity", "aspen", "crestedbutte", "alta"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
      toggleOptions = {["ListView", "MapView"]}

      view = {toggleView}
      setView = {settoggleView}
    >
    </Grid>
  );
};

const Grid = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
  toggleOptions,

  view,
  setView
}) => (
  <View style={{ padding: 10, flex: 1 }}>

  {/* Top Container */}
  <View style={[styles.topContainer, { [label]: selectedValue }]}>
  {children}
    <View>
      <Text style={styles.SnomeLogo}>Snome Logo</Text>
    </View>

    {/* Search Box Container */}
    <View
      // style={{maxWidth: '80%', alignItems: 'center'}}
      style={{padding: 12, width: "80%", backgroundColor: "", alignSelf: 'center'}}
    >
      <Text style={{marginLeft: 12, marginBottom: 4}}>Choose your destination</Text>
      <TextInput
        style={[styles.input, ]}
        placeholder="useless placeholder"
      />
      <Text style={{marginLeft: 12, marginTop: 4}}>Advanced search</Text>

    </View>

    {/* Toggle For List Map View */}
    <View style={styles.row}>
      {toggleOptions.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => setView(option)}
          style={[
            styles.toggle,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

        {view === 'MapView' &&
        <Text> {view} </Text>
          }

        {view === 'ListView' &&
        <Text> {view} </Text>
          }




  </View>

    {/* Location Grid */}
    <Text style={styles.label}>{label}</Text>
    {/* {view === 'list' && */}
    <View style={styles.row}>
    {/* <View style={[styles.row, option === 'list' && {backgroundColor: "black"}]}> */}
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.location,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
{/* } */}

    {/* Bottom Container */}
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
      <Text>Bottom Container</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  toggle: {
    backgroundColor: "oldlace",
    padding:18,
    marginBottom: 20,

  },
  input: {
    height: 40,
    // marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    // maxWidth: '80%'
  },
  SnomeLogo: {
    padding:18,
    backgroundColor: "powderblue",
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  topContainer: {
    // flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    // flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  location: {
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginBottom: 16,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FeaturedLocations