import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import tw from "twrnc";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("Home");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  return (
    <ScrollView style={tw`bg-white`} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={tw`mt-30 items-center bg-white`}>
        <Text
          style={{
            fontFamily: "Roboto_700Bold",
            marginBottom: 10,
            fontSize: 23,
            color: "blue",
          }}
        >
          Reset Your Password
        </Text>
        <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="New Password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry={false}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} type="Primary" />
        <CustomButton
          text="Back to SignIn"
          onPress={onSignInPressed}
          type="Tertiary"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({});
