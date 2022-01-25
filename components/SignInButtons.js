import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";

const SignInButtons = () => {
  const onSignInGoogle = () => {
    console.warn("Sign in with Google");
  };
  const onSignInFacebook = () => {
    console.warn("Sign in with facebook");
  };
  const onSignInApple = () => {
    console.warn("Sign in with Apple");
  };
  return (
    <>
      <CustomButton
        text="Sign In With Google"
        onPress={onSignInGoogle}
        type="Secondary"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In With Facebook"
        onPress={onSignInFacebook}
        type="Secondary"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In With Apple"
        onPress={onSignInApple}
        type="Secondary"
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
    </>
  );
};

export default SignInButtons;

const styles = StyleSheet.create({});
