import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-community/masked-view";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

const GradientIcon = ({ size = 32 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
    <Rect width="32" height="32" fill="blue" />
  </Svg>

  );
};

export default GradientIcon;
