import React from 'react'
import { StyleSheet, Text , View} from "react-native";


const CustomHeading = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.headingText}>{title}</Text>
  </View>
);

export default CustomHeading;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
   marginBottom: 15,
    marginLeft: 20
    
  },
  headingText: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    textAlign: 'left',
    //justifyContent: 'flex-start',
    //alignItems: 'flex-start'
  }
});