import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const PlayPage = () => {
  return (
    <ImageBackground
      source={require("../assets/burnaplay.png")}
      style={styles.imageBackground}
    >
      <View style={styles.contentContainer}>
        <View style={styles.containerTop}>
          <View style={styles.textContainer}>
            <Text style={styles.textTop}>Burna boy, 2022</Text>
            <Text style={styles.textMiddle}>Last Last</Text>
            <Text style={styles.textBottom}>Afrobeats</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name="hearto" size={24} color="white" />
          </View>
        </View>
        <View style={styles.wave}>
          <Image
            style={styles.waveimage}
            source={require("../assets/wave.png")}
          />
        </View>
        <View style={styles.durationContainer}>
          <Text style={styles.current}>0:37</Text>
          <Text style={styles.total}>2:49</Text>
        </View>
        <View style={styles.controlsContainer}>
          <Ionicons name="shuffle-outline" size={24} color="#A1A1A1" />
          <View style={styles.middleControls}>
            <AntDesign name="stepbackward" size={30} color="#DEDEDE" />
            <AntDesign
              name="pausecircle"
              size={50}
              color="white"
              style={styles.pauseButton}
            />
            <AntDesign name="stepforward" size={30} color="#DEDEDE" />
          </View>

          <Feather
            name="repeat"
            size={24}
            color="#A1A1A1"
            style={styles.repeatButton}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PlayPage;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  contentContainer: {
    flex: 0.5,
    backgroundColor: "rgba(49, 49, 49, 0.75)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20, // Added some padding for content spacing.
  },
  containerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    // flex: 1, // Ensures it occupies the entire contentContainer space.
  },
  textContainer: {
    flex: 1, // This will push the icon to the far right.
  },
  iconContainer: {
    // Added some padding for easier touch.
  },
  textTop: {
    color: "#808080",
    fontSize: 12,
    fontFamily: "other",
  },
  textMiddle: {
    color: "#EDEDED",
    fontFamily: "mb",
    fontSize: 34,
  },
  textBottom: {
    color: "#EDEDED",
    fontFamily: "other",
    fontSize: 16,
  },
  wave: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  waveimage: {
    width: 330,
    resizeMode: "contain",
  },
  durationContainer: {
    flexDirection: "row", // This ensures the texts are placed side by side
    justifyContent: "space-between", // This pushes the texts to the left and right edges
    marginTop: 15, // Adjust as per your design needs
    paddingHorizontal: 5, // Some padding to avoid sticking to the edges
  },
  current: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "other",
  },
  total: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "other",
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20, // adjust as needed
    paddingHorizontal: 20, // some space on the sides
  },
  shuffleButton: {
    marginRight: 10,
  },
  middleControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    // occupy more space in the middle
    alignItems: "center",
  },
  pauseButton: {
    marginHorizontal: 20, // space between the pause and the next/previous buttons
  },
  repeatButton: {
    marginLeft: 10,
  },
});
