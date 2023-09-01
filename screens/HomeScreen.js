import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "../components/SearchBar";
import Homeswiper from "../components/Homeswiper";
import RisingStars from "../components/RisingStars";
import PostsCard from "../components/PostsCard";
import PostsCardText from "../components/PostsCardText";
import FloatingIcon from "../components/FloatingIcon";
import AuthContext from "../AuthContext";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);


  const handleFloatingIconPress = () => {
    console.log("Floating Icon Pressed!");
    // Add whatever action you want here
  };
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Handle your search logic here
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.melo}>melo</Text>
          <Text style={styles.tribe}>tribe</Text>
        </View>
      ),
      headerTransparent: true,
      headerTitleStyle: {
        fontFamily: "bold",
        color: "#DD2476",
      },
      headerLeft: () => (
        <Image
          source={require("../assets/headicon.png")}
          style={{ width: 60, height: 60, marginLeft: 15 }}
        />
      ),
      headerRight: () =>
        isAuth ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Notification");
            }}
            style={{ paddingRight: 5 }}
          >
            <Ionicons name="notifications-outline" size={28} color="white" />
          </TouchableOpacity>
        ) : (
          <Text style={{ paddingRight: 5, color: "white" }}>Guest Mode</Text>
        ),
    });
  }, [navigation, isAuth]);
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
      <FloatingIcon onPress={handleFloatingIconPress} />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "regular",
  },
  melo: {
    color: "#FF512F",
    fontFamily: "melo",
    fontSize: 28,
  },
  tribe: {
    color: "#DD2476",
    fontFamily: "melo",
    fontSize: 28,
  },
});
