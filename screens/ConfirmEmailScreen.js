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
import SignInButtons from "../components/SignInButtons";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate("Home");
  };
  const onResendCodePressed = () => {
    console.warn("Sign In kar liya hai");
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
          Confirm Your Email
        </Text>
        <CustomInput
          placeholder="Enter your Code"
          value={code}
          setValue={setCode}
          secureTextEntry={false}
        />
        <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
          type="Primary"
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendCodePressed}
          type="Tertiary"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({});
