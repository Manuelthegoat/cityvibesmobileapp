import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");
const circleMargin = 10;
const circleDiameter = (width - circleMargin * 8) / 4;

const RisingStars = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.swipertitle}>Featured</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={width}
        style={styles.swiper}
      >
        <View style={styles.page}>
          <View style={styles.circleWrapper}>
            <Image
              source={require("../assets/artists/4.jpg")}
              style={styles.circleImage}
              resizeMode="cover"
            />
            <Text style={styles.circleText}>Tiwa</Text>
          </View>
          <View style={styles.circleWrapper}>
            <Image
              source={require("../assets/artists/5.png")}
              style={styles.circleImage}
              resizeMode="cover"
            />
            <Text style={styles.circleText}>Drake</Text>
          </View>
          <View style={styles.circleWrapper}>
            <Image
              source={require("../assets/artists/6.png")}
              style={styles.circleImage}
              resizeMode="cover"
            />
            <Text style={styles.circleText}>Davido</Text>
          </View>
          <View style={styles.circleWrapper}>
            <Image
              source={require("../assets/artists/7.png")}
              style={styles.circleImage}
              resizeMode="cover"
            />
            <Text style={styles.circleText}>Ariana</Text>
          </View>
          <View style={styles.circleWrapper}>
            <Image
              source={require("../assets/artists/8.png")}
              style={styles.circleImage}
              resizeMode="cover"
            />
            <Text style={styles.circleText}>Burna Boy</Text>
          </View>
          <View style={styles.circleWrapper}>
            <Image
              source={require("../assets/artists/9.png")}
              style={styles.circleImage}
              resizeMode="cover"
            />
            <Text style={styles.circleText}>Big Wiz 🦅</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RisingStars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {},
  page: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circleWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: circleMargin,
  },
  circleImage: {
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleDiameter / 2,
  },
  circleText: {
    marginTop: 5,
    color: "rgba(151, 151, 151, 1)",
    fontSize: 14,
    fontFamily: "other",
    textAlign: "center",
  },
  swipertitle: {
    fontFamily: "other",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    marginBottom: 10,
  },
});
