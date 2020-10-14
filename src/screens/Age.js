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
import LottieView from "lottie-react-native";

import CustomButton from "../components/CustomButton";

const animation = require("../../assets/mykolo.json");

export default function Age({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.input}>
        <LottieView
          source={animation}
          autoPlay
          style={styles.lottie}
          resizeMode="cover"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.button}
          title="Age"
          onPress={() => navigation.navigate("Profile")}
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
    marginBottom: 70,
    //marginTop: 70,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 40,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
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
  lottie: {
    height: 200,
    width: 200,
    marginTop: 30,
  },
});
