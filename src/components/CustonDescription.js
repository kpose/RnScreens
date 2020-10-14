import React from 'react'
import { StyleSheet, Text , View} from "react-native";


const CustomDescription = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.descriptionText}>{title}</Text>
  </View>
);

export default CustomDescription;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginLeft: 20
    
  },
  descriptionText: {
    fontSize: 20,
    color: "#918E8E",
    textAlign: 'left',
    //justifyContent: 'flex-start',
    //alignItems: 'flex-start'
  }
});