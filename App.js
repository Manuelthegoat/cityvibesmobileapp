import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import Chatscreen from "./screens/Chatscreen";
import HomeScreen from "./screens/HomeScreen";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import ArtistScreen from "./screens/ArtistScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
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
                    ? require("./assets/profileopen.png")
                    : require("./assets/profile.png")
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
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          regular: require("./assets/fonts/Poppins-Regular.ttf"), // Adjust path accordingly
          bold: require("./assets/fonts/Poppins-Bold.ttf"), // Adjust path accordingly
          other: require("./assets/fonts/mulish.ttf"), // Adjust path accordingly
          mb: require("./assets/fonts/Mulish-Bold.ttf"), // Adjust path accordingly
        });
        setFontLoaded(true);
      } catch (error) {
        console.error("Error loading fonts: ", error);
      }
    }

    loadFonts();
  }, []);
  if (!fontLoaded) {
    return null; // Or return a loading component
  }

  return (
    <>
      {/* <NavigationContainer>
        <MyTabs />
      </NavigationContainer> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitleStyle: {
                fontFamily: "bold",
                color: "white",
              },
              headerLeft: (props) => (
                <TouchableOpacity onPress={props.onPress}>
                  <Image
                    source={require("./assets/back.png")}
                    style={{ marginLeft: 10 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
