import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import AuthScreen from "../screens/AuthScreen";
import MyTabs from "./MyTabs";
import AuthContext from "../AuthContext";

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

  return <MyTabs />;
};

export default MainFlow;

const styles = StyleSheet.create({});
