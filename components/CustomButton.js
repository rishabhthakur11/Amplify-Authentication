import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
const CustomButton = ({ onPress, text, type, bgColor, fgColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`p-2 w-80 rounded-lg mt-2`,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          tw`text-center`,
          styles.conatiner,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  conatiner: {
    fontFamily: "Roboto_500Medium",
  },
  container_Primary: {
    backgroundColor: "#3B71F3",
  },
  container_Secondary: {
    borderColor: "#3B71F3",
    borderWidth: 0,
    borderRadius: 5,
  },
  container_Tertiary: {
    marginTop: 18,
  },
  text_Primary: {
    color: "white",
  },
  text_Secondary: {
    color: "#3B71F3",
  },

  text_Tertiary: {
    color: "gray",
  },
});
