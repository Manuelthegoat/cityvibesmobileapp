import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthContext from "../AuthContext";
import LoadingScreen from "../screens/LoadingScreen";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";


const LoginAcc = ({ navigation }) => {
  const { isAuth, setIsAuth, setIsLoading, isLoading } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const auth = getAuth(app);
    setIsLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (result.user) {
        const db = getFirestore(app);
        const userRef = doc(db, "users", result.user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists) {
          console.log("User details from Firestore:", userSnap.data());

          // Optional: Save user details to AsyncStorage
          await AsyncStorage.setItem(
            "userDetails",
            JSON.stringify(userSnap.data())
          );
        } else {
          console.error("No user details found in Firestore.");
        }

        setIsAuth(true);
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }

    setIsLoading(false);
  };

  return (
    <LinearGradient
      colors={["#FF512F", "#000000"]}
      style={{ flex: 1 }}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.4, y: 0.3 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.text}>Sign In</Text>
            <Text style={styles.subtext}>Welcome Back</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.textinput}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="uxmadami@gmail.com"
                placeholderTextColor="rgba(151, 151, 151, 0.7)"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.textinput}
                placeholder="Enter your password"
                placeholderTextColor="rgba(151, 151, 151, 0.7)"
              />
            </View>
          </View>
          <View style={styles.remember}>
            <View style={styles.remember1}>
              <Image source={require("../assets/turnon.png")} />
              <Text style={styles.remembertext}>Remember me</Text>
            </View>
            <View style={styles.remember2}>
              <Text style={styles.remembertext2}>Forgot Password?</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnbg} onPress={handleSignIn}>
              <Text style={styles.btntext}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text1}>Or Continue with</Text>
            <View style={styles.sociallogin}>
              <TouchableOpacity>
                <Image source={require("../assets/social/1.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/social/2.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/social/3.png")} />
              </TouchableOpacity>
            </View>
          </View>

          {isLoading && <LoadingScreen />}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginAcc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "flex-start",
    paddingTop: 60,
    paddingLeft: 20,
  },
  bodyContainer: {
    paddingLeft: 20,
    marginTop: 50,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 31,
    fontFamily: "mb",
    marginBottom: 20,
  },
  subtext: {
    color: "#979797",
    fontSize: 16,
    fontFamily: "other",
  },
  label: {
    color: "#979797",
    fontSize: 16,
    fontFamily: "other",
    marginBottom: 10,
  },
  textinput: {
    borderColor: "#FF512F",
    borderWidth: 2,
    width: 320,
    backgroundColor: "rgba(151, 151, 151, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 10,
    color: "white",
  },
  inputGroup: {
    marginBottom: 10,
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  btnbg: {
    backgroundColor: "#FF512F",
    width: 320,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    color: "#FFFFFF",
    fontFamily: "other",
  },
  tc: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },
  tc1: {
    color: "#979797",
    fontFamily: "other",
  },
  tc2: {
    color: "#fff",
    fontFamily: "mb",
  },
  remembertext: {
    fontSize: 12,
    color: "rgba(151, 151, 151, 0.70)",
    fontFamily: "mb",
  },
  remembertext2: {
    color: "#fff",
    fontFamily: "mb",
    fontSize: 16,
  },
  remember: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
  },
  remember1: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    // justifyContent: "flex-end", // Align content to the bottom
    padding: 20,
    alignItems: "center",
  },
  text1: {
    color: "#FFFFFF",
    fontFamily: "mb",
    marginTop: 40,
  },
  sociallogin: {
    flexDirection: "row",
    marginTop: 30,
    gap: 25,
  },
});
