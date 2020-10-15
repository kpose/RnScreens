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

export default function BasicInformation({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.heading}>
          <CustomHeading title="Basic Information" />
          <CustomDescription title="Please fill in the details below" />
        </View>

        <View style={styles.input}>
          <CustomInput placeholder="First name" />
          <CustomInput placeholder="Last name" />

          <View style={styles.gender}>
            <View>
              <TouchableOpacity style={styles.genderContainer}>
                <Ionicons name="md-male" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginRight: 20,
                }}
              >
                Male
              </Text>
            </View>

            <View>
              <TouchableOpacity style={styles.genderContainer}>
                <Ionicons name="md-female" size={25} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginRight: 20,
                }}
              >
                Female
              </Text>
            </View>
          </View>

          <CustomInput placeholder="Occupation" />
          <CustomInput placeholder="Address" />
          <CustomInput placeholder="Local government" />
          <CustomInput placeholder="Input Address" />
          <CustomButton
            title="Continue"
            onPress={() => navigation.navigate("EmergencyContact")}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
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
