import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import * as Font from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "./screens/SettingsScreen";
import Login from "./components/Login";
import MainFlow from "./components/MainFlow";
import LoadingScreen from "./screens/LoadingScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthContext from "./AuthContext";
import PlayPage from "./screens/PlayPage";
import { Entypo } from "@expo/vector-icons";
import NotificationScreen from "./screens/NotificationScreen";

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          regular: require("./assets/fonts/Poppins-Regular.ttf"), // Adjust path accordingly
          bold: require("./assets/fonts/Poppins-Bold.ttf"), // Adjust path accordingly
          other: require("./assets/fonts/mulish.ttf"), // Adjust path accordingly
          mb: require("./assets/fonts/Mulish-Bold.ttf"), // Adjust path accordingly
        });
        setFontLoaded(true);
      } catch (error) {
        console.error("Error loading fonts: ", error);
      }
    }

    loadFonts();
  }, []);
  if (!fontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading, setIsLoading }}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Homes"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="MainFlow" component={MainFlow} />
              <Stack.Screen
                name="Login"
                
                component={Login}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: "",
                  headerLeft: (props) => (
                    <TouchableOpacity onPress={props.onPress}>
                      <Image
                        source={require("./assets/back.png")}
                        style={{ marginLeft: 10 }}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitleStyle: {
                    fontFamily: "bold",
                    color: "white",
                  },
                  headerLeft: (props) => (
                    <TouchableOpacity onPress={props.onPress}>
                      <Image
                        source={require("./assets/back.png")}
                        style={{ marginLeft: 10 }}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Play"
                component={PlayPage}
                options={{
                  headerShown: true,
                  headerTitle: "Now Playing",
                  headerTransparent: true,
                  headerTitleStyle: {
                    fontFamily: "bold",
                    color: "white",
                  },
                  headerLeft: (props) => (
                    <TouchableOpacity onPress={props.onPress}>
                      <Image
                        source={require("./assets/back.png")}
                        style={{ marginLeft: 10 }}
                      />
                    </TouchableOpacity>
                  ),
                  headerRight: (props) => (
                    <TouchableOpacity style={{marginRight: 4}} >
                      <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                  ),
                }}
              />
              <Stack.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                  headerShown: true,
                  headerTitle: "Notifications",
                  headerTransparent: true,
                  headerTitleStyle: {
                    fontFamily: "bold",
                    color: "white",
                  },
                  headerLeft: (props) => (
                    <TouchableOpacity onPress={props.onPress}>
                      <Image
                        source={require("./assets/back.png")}
                        style={{ marginLeft: 10 }}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
