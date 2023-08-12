import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/profile.png")} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="What's on your mind?"
        placeholderTextColor="rgba(151, 151, 151, 0.7)"
      />
      <TouchableOpacity onPress={() => onSearch(searchQuery)}>
        <Image
          source={require("../assets/searchbtn.png")}
          style={styles.searchImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 81, 47, 0.2)",
    opacity: 10,
    padding: 8,
    borderRadius: 30,
  },
  icon: {
    marginRight: 8,
    width: 40,
    height: 40,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontFamily: "regular",
  },
});

export default SearchBar;
