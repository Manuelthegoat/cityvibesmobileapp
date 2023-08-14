import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    navigation.setOptions({
      title: "Profile",
      headerTransparent: true,
      headerTitleStyle: {
        fontFamily: "bold",
        color: "white",
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
          style={{ paddingRight: 5 }}
        >
          <Ionicons name="settings-outline" size={28} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const getTabStyle = (tabName) => {
    return tabName === activeTab ? styles.tabactive : {};
  };

  return (
    <LinearGradient
      colors={["#FF512F", "#000000"]}
      style={{ flex: 1 }}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.4, y: 0.3 }}
    >
      <ImageBackground
        source={require("../assets/profilebg.png")}
        style={styles.imageBackground}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.view}>
            <Image
              source={require("../assets/profilepicture.png")}
              style={styles.profilepic}
            />
            <Text style={styles.titletext}>Martin Madami</Text>
            <Text style={styles.subtext}>Music producer / Artist</Text>
            <View style={styles.achievements}>
              <View style={styles.achieve}>
                <Text style={styles.achievetitle}>100</Text>
                <Text style={styles.achievetext}>Connects</Text>
              </View>
              <View style={styles.achieve}>
                <Text style={styles.achievetitle}>33</Text>
                <Text style={styles.achievetext}>Projects</Text>
              </View>
              <View style={styles.achieve}>
                <Text style={styles.achievetitle}>50</Text>
                <Text style={styles.achievetext}>Collabs</Text>
              </View>
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={getTabStyle("About")}>
              <TouchableOpacity onPress={() => setActiveTab("About")}>
                <Text style={styles.tabtext}>About</Text>
              </TouchableOpacity>
            </View>
            <View style={getTabStyle("Music")}>
              <TouchableOpacity onPress={() => setActiveTab("Music")}>
                <Text style={styles.tabtext}>Music</Text>
              </TouchableOpacity>
            </View>
            <View style={getTabStyle("Collaboration")}>
              <TouchableOpacity onPress={() => setActiveTab("Collaboration")}>
                <Text style={styles.tabtext}>Collaboration</Text>
              </TouchableOpacity>
            </View>
            <View style={getTabStyle("Posts")}>
              <TouchableOpacity onPress={() => setActiveTab("Posts")}>
                <Text style={styles.tabtext}>Posts</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tabcontent}>
            <Text style={styles.contenttext}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum been the industry's standard dummy text ever
              since the 1500s, when an unknown
            </Text>
          </View>
          <View style={styles.socialdiv}>
            <Text style={styles.socialtitle}>Social Profiles</Text>
            <View style={styles.sociallist}>
              <Image source={require("../assets/social/1.png")} />
              <Image source={require("../assets/social/2.png")} />
              <Image source={require("../assets/social/3.png")} />
              <Image source={require("../assets/social/04.png")} />
              <Image source={require("../assets/social/5.png")} />
              <Image source={require("../assets/social/6.png")} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  achieve: {
    flexDirection: "column", // this is the default but added for clarity
    alignItems: "center", // to center the text components horizontally
  },
  achievements: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    paddingBottom: 10,
    gap: 20,
  },
  achievetitle: {
    color: "rgba(255, 255, 255, 1)",
  },
  achievetext: {
    color: "rgba(151, 151, 151, 1)",
  },
  titletext: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "other",
  },
  subtext: {
    fontFamily: "other",
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12,
  },
  text: {
    color: "white",
    fontFamily: "other",
  },
  imageBackground: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    width: "100%",
  },
  tabs: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
  },
  tabtext: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "other",
  },
  tabactive: {
    backgroundColor: "linear-gradient(222deg, rgba(255, 81, 47, 0.60) 0%",
    padding: 8,
    borderRadius: 30,
  },
  contenttext: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "other",
  },
  tabcontent: {
    padding: 8,
    paddingLeft: 15,
    textAlign: "center",
  },
  socialtitle: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontFamily: "other",
    paddingLeft: 20,
  },
  sociallist: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
});
