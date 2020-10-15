import React from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";

import CustomHeading from "../components/CustomHeading";
import CustomDescription from "../components/CustonDescription";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function Education({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <CustomHeading title="Next of Kin" />
        <CustomDescription title="Please fill in the details below" />
      </View>

      <View style={styles.input}>
        <CustomInput placeholder="Name" />
        <CustomInput placeholder="Address" />
        <CustomInput
          rightIcon="ios-phone-portrait"
          placeholder="+234 000 000 000"
          keyboardType="number-pad"
        />
        <CustomInput placeholder="Relationship" />

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate("ForgotPassword")}
        />
      </View>
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
  helpText: {
    color: "red",
    padding: 20,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  gender: {
    //flex: 1,
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-around",
    //alignItems: "center",
  },
  genderIcon: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  genderContainer: {
    backgroundColor: "#2a49b8",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
});
