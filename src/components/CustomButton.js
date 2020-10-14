import React from 'react'
import { StyleSheet, TouchableOpacity, Text , View } from "react-native";


const CustomButton = ({ onPress, title }) => (
  <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  </View>
);

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
   container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }
});