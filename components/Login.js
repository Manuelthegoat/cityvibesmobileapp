import {
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "../config/firebase";

const Login = ({ navigation }) => {
  const { isAuth, setIsAuth, setIsLoading, isLoading } =
    useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const auth = getAuth(app);
    setIsLoading(true); // start loading
    console.log("Loading set to true");

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (result.user) {
        // Save to AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify(result.user));
        await AsyncStorage.setItem("rememberedEmail", email);
        await AsyncStorage.setItem("rememberedPassword", password);
        await AsyncStorage.setItem("Authenticated", "yeso");
        console.log("User registered and saved to AsyncStorage");
      
        console.log("User authenticated");
        console.log("Loading set to false");
        setIsAuth(true);
        navigation.navigate("Home");
        const db = getFirestore(app);
        await setDoc(doc(db, "users", result.user.uid), {
          fullName: fullName ,
          userName: userName,
        });
        console.log("User details saved to Firestore");
      }
    } catch (error) {
      console.error("Error registering user: ", error.message);
    }
    setIsLoading(false);

    // set the authentication state to true after loading
  };
  const inputChangedHandler = (inputId, inputValue) => {
    console.log("InputId: " + inputId);
    console.log("InputValue: " + inputValue);
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
            <Text style={styles.text}>Sign Up</Text>
            <Text style={styles.subtext}>
              Fill the form below to create an account
            </Text>
          </View>
          <KeyboardAvoidingView behavior="padding" style={styles.bodyContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.textinput}
                value={fullName}
                onChangeText={(text) => setFullName(text)}
                placeholder="Martin Madami"
                placeholderTextColor="rgba(151, 151, 151, 0.7)"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.textinput}
                value={userName}
                onChangeText={(text) => setUserName(text)}
                placeholder="UxGuy"
                placeholderTextColor="rgba(151, 151, 151, 0.7)"
              />
            </View>
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
          </KeyboardAvoidingView>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnbg} onPress={handleSignUp}>
              <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tc}>
            <Text style={styles.tc1}>By signing up you agree to our</Text>
            <Text style={styles.tc2}>Terms and conditions</Text>
          </View>
          {isLoading && <LoadingScreen />}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;

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
    marginTop: 30,
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
});
