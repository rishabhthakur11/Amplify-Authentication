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

const SignInScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigation=useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Home')
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
    
  };
  const onForgetPasswordPressed = () => {
    navigation.navigate("ForgotPassword")
  };

  return (
    <ScrollView style={tw`bg-white`} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={tw`items-center bg-white`}>
        <Image
          style={{
            width: "68%",
            maxWidth: 350,
            height: 215,
            resizeMode: "contain",
          }}
          source={{
            uri:
              "data:image/png;base64,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",
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto_700Bold",
            marginBottom: 30,
            fontSize: 21,
            color: "gray",
          }}
        >
          Welcome Back!
        </Text>
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} type="Primary" />
        <CustomButton
          text="Forget Password ?"
          onPress={onForgetPasswordPressed}
          type="Tertiary"
        />
        <CustomButton
          text="Don't have an Account? Create One"
          onPress={onSignUpPressed}
          type="Tertiary"
        />
        <SignInButtons />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
