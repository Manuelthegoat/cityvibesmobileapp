import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";

const Collaboration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open for Collaboration</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        style={styles.swiper}
      >
        <TouchableOpacity style={styles.itemContainer}>
          <Image
            source={require("../assets/artist01.png")}
            style={styles.image}
          />
          <Text style={styles.imageText}>Text 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <Image
            source={require("../assets/artist02.png")}
            style={styles.image}
          />
          <Text style={styles.imageText}>Text 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <Image
           source={require("../assets/artist03.png")}
            style={styles.image}
          />
          <Text style={styles.imageText}>Text 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <Image
            source={require("../assets/artist04.png")}
            style={styles.image}
          />
          <Text style={styles.imageText}>Text 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <Image
            source={require("../assets/artist01.png")}
            style={styles.image}
          />
          <Text style={styles.imageText}>Text 5</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Collaboration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'mb',
    marginBottom: 16,
    color: '#fff'
  },
  itemContainer: {
    marginBottom: 16,
    alignItems: "center",
    paddingRight: 10,
  },
  image: {
    width: 87.464,
    height: 87.464,
    borderRadius: 34.986,
  },
  imageText: {
    marginTop: 12,
    fontSize: 16,
    color: '#979797',
  },
});
