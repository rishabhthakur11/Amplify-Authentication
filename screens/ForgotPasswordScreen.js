import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import tw from "twrnc";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("NewPassword");
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
          placeholder="UserName"
          value={userName}
          setValue={setUserName}
          secureTextEntry={false}
        />
        <CustomButton text="Send" onPress={onSendPressed} type="Primary" />
        <CustomButton
          text="Back to SignIn"
          onPress={onSignInPressed}
          type="Tertiary"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
