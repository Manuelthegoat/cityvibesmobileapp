import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

const PostsCardText = () => {
  return (
    <View style={styles.container}>
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
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </View>
        <Text style={styles.postcontent}>
          Oi i really want to meet{" "}
          <Text style={styles.mention}>@Hitsound </Text>i’ve been using his
          beats to make magic in my locality. I want him to see me. y’all help
          me shout him out please.
        </Text>

        <View style={styles.footer}>
          <View style={styles.likeShareContainer}>
            <AntDesign name="hearto" size={24} color="white" />
            <Text style={styles.likeShareCount}>200</Text>
            <FontAwesome
              name="comment-o"
              size={24}
              color="white"
              style={styles.commentIcon}
            />
            <Text style={styles.likeShareCount}>300</Text>
          </View>
          <View style={styles.likeShareContainer}>
            <AntDesign name="sharealt" size={24} color="white" />
            <Text style={styles.likeShareCount}>10</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostsCardText;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  card: {
    width: cardWidth,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "rgba(13, 11, 10, 1)",
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
  headerText: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  centerImage: {
    width: "80%",
    height: cardWidth * 0.6, // Adjust height as required
  },
  postcontent: {
    color: "white",
    fontFamily: "mb",
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  likeShareContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeShareCount: {
    marginLeft: 5,
    fontSize: 12,
    color: "white",
    fontFamily: "other",
  },
  commentIcon: {
    marginLeft: 10,
  },
  mention: {
    color: "#FF512F",
  },
});
