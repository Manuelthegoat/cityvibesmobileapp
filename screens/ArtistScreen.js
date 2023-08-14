import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./LoadingScreen";
import Homeswiper from "../components/Homeswiper";

const ArtistScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = async () => {
    setIsLoading(true);

    // Simulating some asynchronous operation (e.g., fetching data) during navigation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    navigation.navigate("Search");
    setIsLoading(false);
  };
  useEffect(() => {
    navigation.setOptions({
      title: "Artists",
      headerTransparent: true,
      headerTitleStyle: {
        fontFamily: "bold",
        color: "white",
      },
      headerRight: () => (
        <TouchableOpacity onPress={handleNavigate} style={{ paddingRight: 5 }}>
          <Ionicons name="search-outline" size={28} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <LinearGradient
      colors={["rgba(0,0,0,1) 63%", "rgba(91,5,5,1) 91%", "rgba(37,2,2,1) 97%"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView style={styles.view}>
        <Homeswiper />
        <Text style={styles.text}>ArtistScreen</Text>
        {isLoading && <LoadingScreen />}
      </ScrollView>
    </LinearGradient>
  );
};

export default ArtistScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: "white",
    fontFamily: "regular",
  },
});
