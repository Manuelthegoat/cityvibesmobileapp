import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthScreen from "../screens/AuthScreen";
import MyTabs from "./MyTabs";

const MainFlow = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  if (!isAuth) {
    return (
      <AuthScreen
        setIsAuth={setIsAuth}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  }

  return <MyTabs />;
};

export default MainFlow;

const styles = StyleSheet.create({});
