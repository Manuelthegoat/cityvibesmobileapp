import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import Chatscreen from "../screens/Chatscreen";
import HomeScreen from "../screens/HomeScreen";
import ArtistScreen from "../screens/ArtistScreen";


const Tab = createBottomTabNavigator();

const MyTabs = () => {
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
        } else if (route.name === "Chat") {
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
      options={{
        tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
      }}
    />
  </Tab.Navigator>
  )
}

export default MyTabs

const styles = StyleSheet.create({})