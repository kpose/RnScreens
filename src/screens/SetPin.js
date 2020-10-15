import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
  Button,
} from "react-native";

import CustomHeading from "../components/CustomHeading";
import CustomDescription from "../components/CustonDescription";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function SetPassword({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <CustomHeading title="Set PIN" />
      </View>
      <CustomDescription title="Require information to account creations" />
      <View style={styles.input}>
        <CustomInput
          placeholder="PIN"
          rightIcon="ios-eye-off"
          keyboardType="number-pad"
        />

        <CustomInput
          placeholder="Repeat PIN"
          rightIcon="ios-eye-off"
          keyboardType="number-pad"
        />
        {/* <Text style={styles.helpText}> Help?</Text> */}

        <CustomButton
          style={styles.button}
          title="Continue"
          onPress={() => navigation.navigate("Payment")}
        />
      </View>
      <Text style={styles.text}> Already have an Account?</Text>
      <Text style={styles.redText}> LOGIN</Text>
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
    marginTop: 20,
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
    paddingTop: 20,
  },
});
