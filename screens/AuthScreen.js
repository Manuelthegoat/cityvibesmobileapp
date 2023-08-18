import React, { useContext } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import LoadingScreen from "./LoadingScreen";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../AuthContext";

const AuthScreen = ({ navigation }) => {
    const { setIsAuth, setIsLoading, isLoading } = useContext(AuthContext);
   
  const handleEmailLogin = async () => {
    // Add your email login logic here if any
    setIsLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // setIsAuth(true);
    navigation.navigate("Login");

    setIsLoading(false);
  };
  return (
    <ImageBackground
      source={require("../assets/signupbg.png")}
      style={styles.imageBackground}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.texttitle}>Connect with other musicians</Text>
        <TouchableOpacity style={styles.btnbg} onPress={handleEmailLogin}>
          <Text style={styles.btntext}>Continue with email</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Or sign up with</Text>
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
        <Text style={styles.text2}>
          Already have an account?{" "}
          <TouchableOpacity>
            <Text style={styles.text3}>Sign In</Text>
          </TouchableOpacity>{" "}
        </Text>
      </View>
      {isLoading && <LoadingScreen />}
    </ImageBackground>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center", // Center vertically
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end", // Align content to the bottom
    padding: 20,
    alignItems: "center",
  },
  texttitle: {
    color: "#FFFFFF",
    fontFamily: "mb",
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 10,
  },
  btnbg: {
    backgroundColor: "#FF512F",
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    color: "#FFFFFF",
    fontFamily: "other",
  },
  text1: {
    color: "#FFFFFF",
    fontFamily: "mb",
    marginTop: 40,
  },
  text2: {
    color: "#979797",
    marginTop: 40,
    marginBottom: 40,
  },
  text3: {
    color: "#FFFFFF",
    textDecorationLine: "underline",
  },
  sociallogin: {
    flexDirection: "row",
    marginTop: 30,
    gap: 25,
  },
});
