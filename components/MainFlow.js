import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AuthScreen from "../screens/AuthScreen";
import MyTabs from "./MyTabs";
import AuthContext from "../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MainFlow = ({ navigation }) => {
  const { isAuth, setIsAuth, isLoading, setIsLoading } =
    useContext(AuthContext);
    // if (isAuth){
    //     navigation.navigate('MainFlow')
    // }

    // if (!isAuth) {
    //   // Instead of rendering AuthScreen, redirect the user to HomeScreen
    //   navigation.navigate('Home'); // or whatever your home screen route name is
    // }
    useEffect(() => {
      async function checkAuthStatus() {
        const authStatus = await AsyncStorage.getItem('Authenticated');
        if (authStatus === 'yeso') {
          setIsAuth(true);
          navigation.navigate('MainFlow'); // Navigate to the main authenticated screen
        }
      }
  
      checkAuthStatus();
    }, [navigation]);

  return <MyTabs />;
};

export default MainFlow;

const styles = StyleSheet.create({});
