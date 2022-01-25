import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import tw from "twrnc";
const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <SafeAreaView
      style={tw`bg-gray-100 w-80 rounded-lg p-2  border border-blue-100 m-2 `}
    >
      <TextInput
        style={{ fontFamily: "Roboto_500Medium" }}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </SafeAreaView>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
