import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';

import CustomInput from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';
import CustomHeading from './src/components/CustomHeading';
import CustomDescription from './src/components/CustonDescription'

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>

      <CustomHeading title="Welcome to heading" />

      <CustomDescription title = "This is the description" />


      <StatusBar style="auto" />


      

      <CustomInput rightIcon = "ios-bluetooth" leftIcon = "ios-flag"  placeholder="Search any city" />

      <CustomButton title="Hey there!" />

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
