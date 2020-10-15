import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import CustomHeading from "../components/CustomHeading";
import CustomDescription from "../components/CustonDescription";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

import { Ionicons } from "@expo/vector-icons";

export default function Education({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <CustomHeading title="Education" />
        <CustomDescription title="Please fill in the details below" />
      </View>

      <View style={styles.input}>
        <CustomInput placeholder="Bachelors Degree" />
        <CustomInput placeholder="Masters Degree" />
        <CustomInput placeholder="Ph.D" />
        <CustomInput placeholder="Others" />

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate("NextOfKin")}
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
