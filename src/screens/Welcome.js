import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";

import CustomHeading from "../components/CustomHeading";
import CustomDescription from "../components/CustonDescription";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function Welcome() {
  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <CustomHeading title="Welcome back!" />
      </View>
      <CustomDescription title="Enter your phone number to log in" />
      <View style={styles.input}>
        <CustomInput
          rightIcon="ios-phone-portrait"
          placeholder="+234 000 000 000"
          keyboardType="number-pad"
        />
        <CustomButton title="Sign in" />
      </View>
      <Text style={styles.helpText}> Help?</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  heading: {
    marginTop: 100,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  helpText: {
    color: "red",
    padding: 20,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
