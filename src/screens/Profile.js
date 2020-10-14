import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableHighlight,
  Button,
} from "react-native";
import LottieView from "lottie-react-native";

import CustomButton from "../components/CustomButton";
import CustomDescription from "../components/CustonDescription";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.profile}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ flex: 1, width: 100, height: 100, borderRadius: 50 }}
            source={require("../../assets/kpose.jpg")}
          />
        </View>
        <CustomDescription
          style={{ flex: 1, flexWrap: "wrap" }}
          title="Upload Profile Picture"
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.button}
          title="Sign up Account"
          onPress={() => navigation.navigate("BasicInformation")}
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
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    marginTop: 150,
    //marginBottom: 100,
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
