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
        <CustomHeading title="Set Password" />
      </View>
      <CustomDescription title="Require information to account creations" />
      <View style={styles.input}>
        <CustomInput
          placeholder="Password"
          rightIcon="ios-eye-off"
          style={{ marginTop: 10 }}
        />

        <CustomInput placeholder="Repeat Password" rightIcon="ios-eye-off" />
        {/* <Text style={styles.helpText}> Help?</Text> */}

        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#f00",
            justifyContent: "center",
            alignItems: "center",
          }}
          underlayColor="#ccc"
        ></View>

        <CustomButton
          style={styles.button}
          title="Continue"
          onPress={() => navigation.navigate("Age")}
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
    paddingTop: 20,
  },
});
