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

const SignUpScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail");
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
          Create An Account
        </Text>
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton
          text="Register"
          onPress={onRegisterPressed}
          type="Primary"
        />
        <Text
          style={{
            color: "gray",
            marginVertical: 10,
            fontFamily: "Roboto_400Regular",
            fontSize: 13,
            margin: 10,
          }}
        >
          By registering, you confirm that you accept our Termsof Use and
          privacy Policy
        </Text>
        <SignInButtons />
        <CustomButton
          text="Have an account ? Sign In"
          onPress={onSignInPressed}
          type="Tertiary"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
