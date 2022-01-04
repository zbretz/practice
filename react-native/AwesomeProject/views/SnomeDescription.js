import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";

// initial Snome image that is loaded
const image = {
  uri: "https://snome.s3.us-east-2.amazonaws.com/langham_news_2.jpg",
};

// There are a couple things commented out here that we were playing with when trying to get multiple photos to load and to be able to scroll through them when pushing on the arrows. Some other comments are just descriptive.

// const getPhotos = async (id) => {
//   try {
//     const response = await fetch(`http://localhost:3000/snome/${id}/photos`);
//     const json = await response.json();
//     setData(json);
//   } catch (error) {
//     console.error(error);
//   }
// };

const SnomeDescription = () => {
  // const [photos, setData] = useState([]);

  const window = useWindowDimensions();

  const scrollPhoto = () => {
    console.log("this worked!");
  };

  // useEffect(() => {
  //   getPhotos();
  // }, []);

  const createLikeOrMatch = () => {
    console.log("this worked too");
  };

  return (
    // parent container for the whole screen
    <ScrollView
      // "style" is for the ScrollView container itself
      style={styles.scrollView}
      // "contentContainerStyle" apparently comes with ScrollView and is for the content inside the container. I guess it's like a container within a container.
      contentContainerStyle={styles.contentContainer}
    >
      {/* for the top navigation back arrow */}
      <AntDesign
        name="leftcircleo"
        size={34}
        color="black"
        style={{ alignSelf: "flex-start", marginTop: 10 }}
      />
      {/* container for the photos */}
      <View style={styles.photoContainer}>
        {/* the current photo itself */}
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        ></ImageBackground>
        {/* container for the icons on top of the photo */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* for the left arrow on the photo */}
          <TouchableOpacity
            onPress={scrollPhoto}
            style={{
              position: "absolute",
            }}
          >
            <AntDesign name="left" size={34} color="black" />
          </TouchableOpacity>
          {/* for the right arrow on the photo */}
          <TouchableOpacity style={{ position: "absolute", margin: 330 }}>
            <AntDesign
              onPress={scrollPhoto}
              name="right"
              size={34}
              color="black"
            />
          </TouchableOpacity>
          {/* for the like button on the photo */}
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              position: "absolute",
              marginLeft: 300,
            }}
          >
            <Ionicons
              onPress={createLikeOrMatch}
              name="heart-circle-outline"
              size={64}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Snome title under the photos */}
      <Text
        style={{
          width: "100%",
          fontSize: 25,
          paddingTop: 7,
          textAlign: "left",
        }}
      >
        Gorgeous 2 bedroom with views
      </Text>
      {/* container for all the Snome info/stats */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTextHeaders}>
          {/* "&nbsp;" is how you add spaces */}
          4.75&nbsp;&nbsp;
          <FontAwesome name="star" size={20} color="black" />
          <FontAwesome name="star" size={20} color="black" />
          <FontAwesome name="star" size={20} color="black" />
          <FontAwesome name="star" size={20} color="black" />
          <FontAwesome name="star-half" size={20} color="black" />
        </Text>
        <Text style={styles.descriptionTextHeaders}>
          Availability{"\n"}
          <Text style={{ fontWeight: "normal" }}>Dec – April</Text>
        </Text>

        <Text style={styles.descriptionTextHeaders}>
          Rooms{"\n"}
          <Text style={{ fontWeight: "normal" }}>2 beds 1 bath</Text>
        </Text>
        <Text style={styles.descriptionTextHeaders}>
          Mountain Access{"\n"}
          <Text style={{ fontWeight: "normal" }}>8 mins/Ski-in</Text>
        </Text>
      </View>
      {/* container for the Snome host info */}
      <View style={styles.hostContainer}></View>
      {/* container for the Snome reviews */}
      <View style={styles.reviewContainer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // SnomeLogo: {
  //   padding: 18,
  //   backgroundColor: "powderblue",
  //   alignSelf: "flex-start",
  //   marginLeft: 20,
  //   marginTop: 20,
  //   marginBottom: 60,
  // },
  scrollView: {
    height: "100%",
    backgroundColor: "white",
  },
  contentContainer: {
    margin: 25,
    marginTop: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  photoContainer: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    height: 250,
    width: "100%",
  },
  descriptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-around",
    height: 125,
    width: "100%",
    backgroundColor: "white",
  },
  descriptionTextHeaders: {
    fontSize: 17,
    width: "50%",
    fontWeight: "bold",
  },
  hostContainer: {},
  reviewContainer: {},
});

export default SnomeDescription;