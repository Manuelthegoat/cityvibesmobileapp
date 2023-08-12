import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Chatscreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
          title: "Messages",
          headerTransparent: true,
          headerTitleStyle: {
            fontFamily: "bold",
            color: "white",
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ paddingRight: 5 }}>
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
      <View style={styles.view}>
        <Text style={styles.text}>Chat Screen</Text>
      </View>
    </LinearGradient>
  )
}

export default Chatscreen

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        color: "white",
        fontFamily: "regular",
      },
})