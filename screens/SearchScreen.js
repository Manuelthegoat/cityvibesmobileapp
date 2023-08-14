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
import SearchScreenComponent from "../components/SearchScreenComponent";

const SearchScreen = ({ navigation }) => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Handle your search logic here
  };
  useEffect(() => {
    navigation.setOptions({
      title: "Search",
      headerTransparent: true,
      headerTitleStyle: {
        fontFamily: "bold",
        color: "white",
      },

      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={{ paddingRight: 5 }}>
          <Image
            source={require("../assets/setting.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <LinearGradient
      colors={["#FF512F", "#000000"]}
      style={{ flex: 1 }}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.4, y: 0.3 }}
    >
      <ScrollView style={styles.view}>
        <SearchScreenComponent onSearch={handleSearch} />
        <Text style={styles.text}>Search Screen</Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default SearchScreen;

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
