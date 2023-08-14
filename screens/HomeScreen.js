import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "../components/SearchBar";
import Homeswiper from "../components/Homeswiper";
import RisingStars from "../components/RisingStars";
import PostsCard from "../components/PostsCard";
import PostsCardText from "../components/PostsCardText";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Handle your search logic here
  };
  useEffect(() => {
    navigation.setOptions({
      title: "CityVibes",
      headerTransparent: true,
      headerTitleStyle: {
        fontFamily: "bold",
        color: "white",
      },
      headerLeft: () => (
        <Image
          source={require("../assets/headericon.png")}
          style={{ width: 40, height: 40, marginLeft: 15 }}
        />
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={{ paddingRight: 5 }}>
          <Ionicons name="notifications-outline" size={28} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <LinearGradient
      colors={["#ff522fce", "#000000"]}
      style={{ flex: 1 }}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.4, y: 0.2 }}
    >
      <ScrollView contentContainerStyle={styles.view}>
        <SearchBar onSearch={handleSearch} />
        <Homeswiper />
        <RisingStars />
        <PostsCard />
        <PostsCardText />
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontFamily: "regular",
  },
});
