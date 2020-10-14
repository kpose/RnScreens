import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';




export default function SearchInput(props) {
    return (
        <View style = {styles.container}>
            <Ionicons  style={styles.leftIcon} name={props.leftIcon} size={25} color="green" />


            <TextInput
                autoCorrect={false}
                placeholder= {props.placeholder}
                placeholderTextColor='#D3D3D3'
                style={styles.inputStyle}
               
                
           />

           <Ionicons  style={styles.rightIcon} name={props.rightIcon} size={25} color="green" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    height: 60,
    padding: 10,
    width: 350,
    borderRadius: 20,
    //margin: 10,
    fontFamily: 'Arial',
    
},
  leftIcon: {
    marginRight: 10
},
rightIcon: {
    marginRight: 10
},
  inputStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  flex: 1,
  fontFamily: 'Arial',
    fontSize: 20,

    
},
});
