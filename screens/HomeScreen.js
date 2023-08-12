import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "../components/SearchBar";

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
        color: "white"
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
      colors={["rgba(0,0,0,1) 63%", "rgba(91,5,5,1) 91%", "rgba(54,2,2,1) 97%"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView style={styles.view}>
        <SearchBar onSearch={handleSearch} />
        <Text style={styles.text}>HomeScreen</Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingTop: 100,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        color: "white",
        fontFamily: 'regular'
    }
});
