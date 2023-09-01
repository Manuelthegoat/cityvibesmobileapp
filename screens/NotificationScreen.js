import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

const NotificationScreen = () => {
  return (
    <LinearGradient
      colors={["#FF512F", "#000000"]}
      style={{ flex: 1 }}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.4, y: 0.3 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titlediv}>
            <Text style={styles.title}>Recent</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.card}>
              <View style={styles.header}>
                <Image
                  source={require("../assets/user2.png")}
                  style={styles.topLeftImage}
                  resizeMode="contain"
                />
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerTextMain}>Muzirity</Text>
                  <Text style={styles.headerTextBeside}>@jacob</Text>
                  <Text style={styles.headerTextSecondary}>3 days Ago</Text>
                </View>
              </View>
              <Text style={styles.postcontent}>Mentioned you in a post</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.card}>
              <View style={styles.header}>
                <Image
                  source={require("../assets/donjazzy.png")}
                  style={styles.topLeftImage}
                  resizeMode="contain"
                />
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerTextMain}>Don Jazzy </Text>
                  <Text style={styles.headerTextBeside}>@Mavins_Boss</Text>
                  <Text style={styles.headerTextSecondary}>24 hrs Ago</Text>
                </View>
              </View>
              <Text style={styles.postcontent}>
                Accepted your request to collaborate
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.othercontainer}>
          <View style={styles.titlediv}>
            <Text style={styles.title}>Yesterday</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.card}>
              <View style={styles.header}>
                <Image
                  source={require("../assets/hitsound.png")}
                  style={styles.topLeftImage}
                  resizeMode="contain"
                />
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerTextMain}>HitSound</Text>
                  <Text style={styles.headerTextBeside}>@josh</Text>
                  <Text style={styles.headerTextSecondary}>Yesterday 11:25 pm</Text>
                </View>
              </View>
              <Text style={styles.postcontent}>Mentioned you in a post</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.card}>
              <View style={styles.header}>
                <Image
                  source={require("../assets/hitsound.png")}
                  style={styles.topLeftImage}
                  resizeMode="contain"
                />
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerTextMain}>HitSound</Text>
                  <Text style={styles.headerTextBeside}>@josh</Text>
                  <Text style={styles.headerTextSecondary}>Yesterday 11:25 pm</Text>
                </View>
              </View>
              <Text style={styles.postcontent}>Declined your request to collaborate</Text>
              <Text style={styles.postcontent2}>Tap to amplify your collaboration request</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.card}>
              <View style={styles.header}>
                <Image
                  source={require("../assets/system.png")}
                  style={styles.topLeftImage}
                  resizeMode="contain"
                />
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerTextMain}>System</Text>
                  <Text style={styles.headerTextBeside}>@CityVibes</Text>
                  <Text style={styles.headerTextSecondary}>Yesterday 11:25 pm</Text>
                </View>
              </View>
              <Text style={styles.postcontent}>You changed your profile picture</Text>
            </View>
          </View>
         
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 100 : 100,
  },
  othercontainer: {
    alignItems: "center",
    paddingTop: 10,
  },
  titlediv: {
    alignItems: "flex-start",
    width: cardWidth, // This ensures it aligns with the card below
    paddingBottom: 15, // This will give it some space from the left
  },
  title: {
    color: "#fff",
    fontFamily: "mb",
    fontSize: 16,
  },
  container2: {
    paddingBottom: 10,
  },
  card: {
    width: cardWidth,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    paddingBottom: 11,
    backgroundColor: "#0D0B0A",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row", // Arrange texts horizontally
    flexWrap: "wrap", // Wrap to the next line if needed
    alignItems: "center",
  },
  headerTextMain: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "mb",
  },
  headerTextBeside: {
    fontSize: 16,
    marginLeft: 5,
    color: "#979797",
  },
  headerTextSecondary: {
    fontSize: 10,
    color: "#979797",
    width: "100%", // Take full width to push it onto the next line
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  topLeftImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postcontent: {
    color: "white",
    fontFamily: "other",
    fontSize: 14,
    paddingBottom: 10,
  },
  postcontent2: {
    color: '#FF512F',
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'other'
  }
});
