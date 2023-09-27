import { Image, StyleSheet, Text, View } from "react-native";
import { Alert } from "react-native";
import React, { useContext } from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import Chatscreen from "../screens/Chatscreen";
import HomeScreen from "../screens/HomeScreen";
import ArtistScreen from "../screens/ArtistScreen";
import { LinearGradient } from "expo-linear-gradient";
import AuthContext from "../AuthContext";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Search") {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "ArtistScreen") {
            return (
              <MaterialIcons
                name={focused ? "dashboard" : "dashboard"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            if (isAuth) {
              // Assuming you have access to `isAuth` here.
              return (
                <Image
                  source={
                    focused
                      ? require("../assets/profileopen.png")
                      : require("../assets/profile.png")
                  }
                  style={{ width: size, height: size }}
                />
              );
            } else {
              return (
                <AntDesign
                  name={focused ? "user" : "user"}
                  size={size}
                  color={color}
                />
              );
            }
          }

          if (route.name === "Chat") {
            if (!isAuth) {
              color = "#362f2f"; // or any color to indicate it's disabled
            }
            return (
              <Ionicons
                name={focused ? "chatbubble" : "chatbubble-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "rgba(221, 36, 118, 1), rgba(255, 81, 47, 1)",
        inactiveTintColor: "gray",
        showLabel: false,
        style: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          backgroundColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
        }}
      />
      <Tab.Screen
        name="ArtistScreen"
        component={ArtistScreen}
        options={{
          tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chatscreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            if (!isAuth) {
              // Prevent the tab press completely
              e.preventDefault();

              // Show an alert prompting the user to log in
              Alert.alert("Log in required", "Please log in to access chat.", [
                {
                  text: "OK",
                  onPress: () => {
                    // Navigate to the authentication screen
                    navigation.navigate("AuthScreen"); // Replace "AuthScreen" with the name of your authentication screen if it's different.
                  },
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancelled"),
                  style: "cancel",
                },
              ]);
            }
          },
        })}
        options={{
          tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            if (!isAuth) {
              e.preventDefault();

              Alert.alert("Log in required", "Please log in to access Profile.", [
                {
                  text: "OK",
                  onPress: () => {
                    navigation.navigate("AuthScreen");
                  },
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancelled"),
                  style: "cancel",
                },
              ]);
            }
          },
        })}
        options={{
          tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({});
