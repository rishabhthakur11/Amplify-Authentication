import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Skip = ({ ...props }) => (
  <TouchableOpacity style={tw`ml-5 `} {...props}>
    <Text style={{ fontFamily: "Roboto_500Medium" }}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({ ...props }) => (
  <TouchableOpacity style={tw`mr-5`} {...props}>
    <Text style={{ fontFamily: "Roboto_500Medium" }}>Next</Text>
  </TouchableOpacity>
);
const Done = ({ ...props }) => (
  <TouchableOpacity style={tw`mr-5 p-1`} {...props}>
    <Text style={{ fontFamily: "Roboto_500Medium" }}>Done</Text>
  </TouchableOpacity>
);

const OnBoardingScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        titleStyles={{ fontFamily: "Roboto_400Regular" }}
        onSkip={() => navigation.navigate("SignIn")}
        onDone={() => navigation.navigate("SignIn")}
        pages={[
          {
            backgroundColor: "#a6e4d0",
            image: (
              <Image source={require("../assets/images/onboarding-img1.png")} />
            ),
            title: "Order Grocery Anywhere",
            subtitle: "",
          },
          {
            backgroundColor: "#fdeb93",
            image: (
              <Image source={require("../assets/images/onboarding-img2.png")} />
            ),
            title: "Rate Your Favourite Food",
            subtitle: "",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image source={require("../assets/images/onboarding-img3.png")} />
            ),
            title: "Get Grocery on Your DoorStep",
            subtitle: "",
          },
        ]}
      />
    </SafeAreaProvider>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  text: {},
});
