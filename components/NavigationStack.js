import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
const Stack = createNativeStackNavigator();
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ConfirmEmail"
            component={ConfirmEmailScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="NewPassword"
            component={NewPasswordScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
