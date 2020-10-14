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

export default function Signin({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <CustomHeading title="Save With MyKolo" />
      </View>
      <CustomDescription title="Please sign in to continue app" />
      <View style={styles.input}>
        <CustomInput
          rightIcon="ios-mail"
          placeholder="Email Address"
          keyboardType="email-address"
          style={{ marginTop: 10 }}
        />

        <CustomInput rightIcon="md-lock" placeholder="Password" />
        {/* <Text style={styles.helpText}> Help?</Text> */}

        <CustomButton
          style={styles.button}
          title="Sign in Account"
          onPress={() => navigation.navigate("SignupOne")}
        />
      </View>
      <Text style={styles.redText}> Don't have an account?</Text>
      <Text style={styles.text}> REGISTER</Text>
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  redText: {
    color: "red",
    padding: 20,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    marginLeft: 30,
    fontSize: 18,
  },
});
