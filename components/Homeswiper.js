import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");
const slideWidth = width / 2;

const Homeswiper = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.swipertitle}>Featured</Text>
      <ScrollView
        style={styles.wrapper}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={slideWidth}
      >
        <View style={[styles.slide, { width: slideWidth }]}>
          <ImageBackground
            source={require("../assets/artists/1.png")}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <View style={styles.textContainer}>
              <Text style={styles.imageTexttop}>Love me</Text>
              <Text style={styles.imageTextmiddle}>UxGuy</Text>
              <LinearGradient
                colors={["rgba(255, 81, 47, 0.6)", "rgba(221, 36, 118, 0.6)"]} // Adjust gradient colors as needed
                style={styles.gradientPill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.imageTextbottom}>Pop</Text>
              </LinearGradient>
            </View>
            <Image
              source={require("../assets/playbtn.png")}
              style={styles.playIcon}
            />
          </ImageBackground>
        </View>
        <View style={[styles.slide, { width: slideWidth }]}>
          <ImageBackground
            source={require("../assets/artists/2.png")}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <View style={styles.textContainer}>
              <Text style={styles.imageTexttop}>Last Last</Text>
              <Text style={styles.imageTextmiddle}>Burna Boy</Text>
              <LinearGradient
                colors={["rgba(255, 81, 47, 0.6)", "rgba(221, 36, 118, 0.6)"]} // Adjust gradient colors as needed
                style={styles.gradientPill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.imageTextbottom}>Afro Beats</Text>
              </LinearGradient>
            </View>
            <Image
              source={require("../assets/playbtn.png")}
              style={styles.playIcon}
            />
          </ImageBackground>
        </View>
        <View style={[styles.slide, { width: slideWidth }]}>
          <ImageBackground
            source={require("../assets/artists/3.png")}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <View style={styles.textContainer}>
              <Text style={styles.imageTexttop}>Sound Pacck</Text>
              <Text style={styles.imageTextmiddle}>Hitsound</Text>
              <LinearGradient
                colors={["rgba(255, 81, 47, 0.6)", "rgba(221, 36, 118, 0.6)"]} // Adjust gradient colors as needed
                style={styles.gradientPill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.imageTextbottom}>Beats</Text>
              </LinearGradient>
            </View>
            <Image
              source={require("../assets/playbtn.png")}
              style={styles.playIcon}
            />
          </ImageBackground>
        </View>
      </ScrollView>
      {/* Rest of your content */}
    </View>
  );
};

export default Homeswiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  wrapper: {
    height: 250,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 15,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: 20,
  },
  textContainer: {
    position: "absolute",
    bottom: 10, // Adjust as needed
    left: 10, // Adjust as needed
  },

  imageTexttop: {
    fontFamily: "mb",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
  },
  imageTextmiddle: {
    fontFamily: "other",
    color: "rgba(151, 151, 151, 1)",
    fontSize: 16,
    marginBottom: 5,
  },
  playIcon: {
    position: "absolute", // This will position the play icon absolutely
    top: 10, // Adjust this value as needed
    right: 10, // Adjust this value as needed
  },
  gradientPill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },

  imageTextbottom: {
    fontFamily: "other",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
  },
  swipertitle: {
    fontFamily: "other",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    marginBottom: 10,
  },
});
