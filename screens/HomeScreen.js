import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`mt-30 items-center`}>
      <Text
        style={{
          fontFamily: "Roboto_700Bold",
          alignSelf: "center",
          fontSize: 23,
          color: "gray",
        }}
      >
        Welcome To Home Screen
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
