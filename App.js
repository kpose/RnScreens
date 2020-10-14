import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';

import Navigator from './src/navigation/Navigator'


export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>

      <StatusBar style="auto" />
      <Navigator />

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
