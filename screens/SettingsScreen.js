import {
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
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,1) 63%", "rgba(91,5,5,1) 91%", "rgba(54,2,2,1) 97%"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView style={styles.view}>
        <View style={styles.listitems}>
          <Ionicons name="notifications-outline" size={27} color="white" />
          <Text style={styles.settingstext}>Enable notifications</Text>
          <TouchableOpacity>
            <Image
              style={styles.turnon}
              source={require("../assets/turnon.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : 100,
  },
  listitems: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    padding: 10,
  },
  settingstext: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'other',
    fontSize: 20,
  }
});
