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
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({navigation}) => {
  const removeAuthStatus = async () => {
    await AsyncStorage.removeItem('Authenticated');
    navigation.navigate("AuthScreen")
  };
  return (
    <LinearGradient
      colors={["#FF512F", "#000000"]}
      style={{ flex: 1 }}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.4, y: 0.3 }}
    >
      <ScrollView>
        <View style={styles.view}>
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
          <View style={styles.listitems}>
            <AntDesign name="customerservice" size={27} color="white" />
            <Text style={styles.settingstext}>Contact Us</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <AntDesign name="user" size={27} color="white" />
            <Text style={styles.settingstext}>Personal Data</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <AntDesign name="sound" size={27} color="white" />
            <Text style={styles.settingstext}>Promotions</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <Feather name="smartphone" size={27} color="white" />
            <Text style={styles.settingstext}>Social Profiles</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <Ionicons name="pencil-sharp" size={27} color="white" />
            <Text style={styles.settingstext}>Change Password</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <Feather name="mic" size={27} color="white" />
            <Text style={styles.settingstext}>Language</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={27}
              color="white"
            />
            <Text style={styles.settingstext}>Privacy</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <MaterialCommunityIcons
              name="information-outline"
              size={27}
              color="white"
            />
            <Text style={styles.settingstext}>About</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <SimpleLineIcons name="question" size={27} color="white" />
            <Text style={styles.settingstext}>Help Center</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <Text style={styles.settingstext}>Genre</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listitems}>
            <Text style={styles.settingstext}>Expertise</Text>
            <TouchableOpacity>
              <Image
                style={styles.turnon}
                source={require("../assets/arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signoutbtn} onPress={removeAuthStatus}>
            <Ionicons
              name="exit-outline"
              size={24}
              color="rgba(177, 26, 6, 1)"
            />
            <Text style={styles.signouttext}>Sign out</Text>
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
    paddingTop: Platform.OS === "ios" ? 100 : 100,
    paddingBottom: 30,
  },
  listitems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    padding: 10,
    paddingBottom: 20,
  },
  settingstext: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "other",
    fontSize: 20,
  },
  signoutbtn: {
    borderRadius: 10,
    backgroundColor: "rgba(151, 151, 151, 0.22)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "80%",
    gap: 4,
    alignSelf: "center",
  },
  signouttext: {
    color: "#B11A06",
    textAlign: "center",
    fontFamily: "other",
  },
});
