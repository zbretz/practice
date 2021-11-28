import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import {Dimensions} from 'react-native';
import { SearchBar } from 'react-native-elements';

import { ActivityIndicator, FlatList} from 'react-native';

const FeaturedLocations = () => {
  const [flexDirection, setflexDirection] = useState("column");
  const [toggleView, settoggleView] = useState("ListView");

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // const [searchData, setSearchData] = useState(['first', 'fish', 'fast', 'fail', 'fat', 'fashion', 'fort', 'forty', 'forlorn']);
  // const [heroes, setHeroes] = useState(['first', 'fish', 'fast', 'fail', 'fat', 'fashion', 'fort', 'forty', 'forlorn']);
  // const [searchData, setSearchData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [query, setQuery] = useState('');

  const getMovies = async () => {
    try {
    //  const response = await fetch('http://localhost:3000/location?featured=true',
    const response = await fetch('http://localhost:3000/location',
    {mode: 'cors'})
     console.log(response)
     const json = await response.json();
     console.log(json)
     setData(json);
    //  setHeroes(json.slice())
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   getMovies();
  //  setHeroes(data.slice())
  //  console.log(searchData)
  //  console.log(heroes)

 }, []);

 console.log(data)
 console.log(searchData)

 const updateQuery = (input) => {
  // setHeroes(data.slice())
  setQuery(input);
  console.log(query);
  console.log(searchData)
  if (input === ''){
    setSearchData([])
  } else {
    setSearchData(data.slice())
  }
 }



const filterNames = (location) => {
  let search = query.toLowerCase().replace(/ /g,"_");
  if(location.name.toLowerCase().startsWith(search)){
      console.log(searchData.length)
      // return location.name;
      return <Text style={{height: 40}}>{location.name}</Text>
  }else{
      searchData.splice(searchData.indexOf(location), 1);
      return null;
  }
}

  return (
    <>

{/* Testing Autocomplete Search */}
<View>

{/* <SearchBar
 onChangeText={updateQuery}
 value={query}
 placeholder="Type Here..."/>

<FlatList data={searchData} style={styles.flatList}
  extraData = {query}
  renderItem = {({item}) =>
    <Text >{filterNames(item)}
    </Text>}
/> */}

{/* Testing Autocomplete Search */}

    <Grid
    updateQuery = {updateQuery}
    query = {query}
    searchData = {searchData}

      label="flexDirection"
      // values={["parkcity", "aspen", "crestedbutte", "alta"]}
      values = {data.map(location => location.name).slice(0,4)}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
      toggleOptions = {["ListView", "MapView"]}

      view = {toggleView}
      setView = {settoggleView}
      filterNames = {filterNames}
    >
    </Grid>
  </View>
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

const CustomSearch = ({
  updateQuery,
  query,
  searchData,
  filterNames
  }) => (
    <>
    <View style={{position: 'relative'}}>
  <SearchBar
  // inputContainerStyle={{backgroundColor:'yellow'}}
  onChangeText={updateQuery}
  value={query}
  placeholder="Type Here..."/>

  <FlatList data={searchData} style={styles.flatList}
    extraData = {query}
    renderItem = {({item}) =>
      // <Text style={{}}>{filterNames(item)}</Text>}
      filterNames(item)}
  />
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
  setView,
  updateQuery,
  query,
  searchData,
  filterNames
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
      {/* <Text style={{marginLeft: 12, marginBottom: 4}}>Choose your destination</Text>
      <TextInput
        style={[styles.input, ]}
        placeholder="useless placeholder"
      />
      <Text style={{marginLeft: 12, marginTop: 4}}>Advanced search</Text> */}

      <Text style={{marginLeft: 12, marginBottom: 4}}>Choose your destination</Text>
      <CustomSearch
        updateQuery = {updateQuery}
        query = {query}
        searchData = {searchData}
        filterNames = {filterNames}
      >
      </CustomSearch>

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

  flatList:{
    position:'absolute',
    top: 66,
    zIndex: 999,
    elevation: 999,
    width: '100%',
    // paddingLeft: 15,
    // marginTop:15,
    // paddingBottom:15,
    // fontSize: 20,
    borderBottomColor: '#26a69a',
    borderBottomWidth: 1,
    backgroundColor: 'white'
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
    zIndex:-1,
    elevation:-1,
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