import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, SafeAreaView, ScrollView } from "react-native";
import {Dimensions} from 'react-native';
const DATA = ['first', 'fish', 'fast']//, 'fail', 'fat', 'fashion', 'fort', 'forty', 'forlorn'];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const NewSearch = () => {

  const [query, setQuery] = React.useState("");

  const filterNames = (location) => {
  let search = query.toLowerCase().replace(/ /g,"_");
  if(location.toLowerCase().startsWith(search)){
      console.log(searchData.length)
      return location.name;
      // return <Text style={{height: 40}}>{location.name}</Text>
  }else{
      searchData.splice(searchData.indexOf(location), 1);
      return null;
  }
}

  const renderItem = ({ item }) => {
    let search = query.toLowerCase().replace(/ /g,"_");
    if(item.toLowerCase().startsWith(search)){
       return (<Item title={item} />)
    }
  };

  return (
    <View >

      <TextInput
        style={styles.input}
        onChangeText={setQuery}
        value={query}
      />
      <FlatList
      style={{}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
}

const FeaturedLocations = () => {
  const [flexDirection, setflexDirection] = useState("column");
  const [toggleView, settoggleView] = useState("ListView");

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getLocations = async () => {
    try {
     const response = await fetch('http://10.0.0.54:3000/location?featured=true');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   getLocations();
 }, []);

 console.log({data})

  return (
    <>
    <Grid
      label="flexDirection"
      // values={["parkcity", "aspen", "crestedbutte", "alta"]}
      values = {data.map(location => location.name)}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
      toggleOptions = {["ListView", "MapView"]}

      view = {toggleView}
      setView = {settoggleView}
    >
    </Grid>
  </>
  );
};

const ListView = ({
    label,
    values,
    selectedValue,
    setSelectedValue,
    toggleOptions}) => (
  <>
  <Text style={styles.label}>{label}</Text>
    <View style={[styles.row, styles.ListMapContainer]}>
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
    </>
)

const MapView = ({
  label,
  // values,
  // selectedValue,
  // setSelectedValue,
  // toggleOptions
  }) => (
    <>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.ListMapContainer}>
      <View style={{
        backgroundColor: "oldlace",
        width: "100%",
        height: "100%",
        padding: 16}}>
      </View>
    </View>
    </>
)

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

      <NewSearch />


      {/* <Text style={{marginLeft: 12, marginTop: 4}}>Advanced search</Text> */}

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

        {/* For testing purposes */}
        {view === 'MapView' &&
        <Text> {view} </Text>
          }

        {view === 'ListView' &&
        <Text> {view} </Text>
          }

  </View>

  {view === 'ListView' &&
    <ListView
      label = {label}
      values = {values}
      selectedValue = {selectedValue}
      setSelectedValue = {setSelectedValue}
    ></ListView>}

{view === 'MapView' &&
    <MapView
      label = {label}
      values = {values}
      selectedValue = {selectedValue}
      setSelectedValue = {setSelectedValue}
    ></MapView>}



    {/* Bottom Container */}
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
      <Text>Bottom Container</Text>
    </View>
  </View>
);


const styles = StyleSheet.create({

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  ListMapContainer: {
    height: Dimensions.get('window').width * 0.8 + 32,
    // backgroundColor: "red"
  },
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
    // alignItems: 'center'
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