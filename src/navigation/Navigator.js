import * as React from "react";
import { Button, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

import Welcome from "../screens/Welcome";
import Signin from "../screens/Signin";
import SignupOne from "../screens/SignupOne";
import SignupTwo from "../screens/SignupTwo";
import SetPassword from "../screens/SetPassword";
import Age from "../screens/Age";
import Profile from "../screens/Profile";
import BasicInformation from "../screens/BasicInformation";

const Stack = createStackNavigator();

function Logo() {
  return (
    <Image
      style={{ width: 100, height: 100, marginTop: 30 }}
      source={require("../../assets/logo.png")}
    />
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerTransparent: true,
            headerTitle: (props) => <Logo {...props} />,
            headerRight: () => (
              <Text style={{ padding: 10, fontSize: 15 }}>Skip Here</Text>
            ),
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                style={{ padding: 10 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            headerTransparent: true,
            headerTitle: (props) => <Logo {...props} />,
            headerRight: () => (
              <Text style={{ padding: 10, fontSize: 15 }}>Skip Here</Text>
            ),
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                style={{ padding: 10 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="SignupOne"
          component={SignupOne}
          options={{
            headerTransparent: true,
            headerTitle: (props) => <Logo {...props} />,
            headerRight: () => (
              <Text style={{ padding: 10, fontSize: 15 }}>Skip Here</Text>
            ),
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                style={{ padding: 10 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="SignupTwo"
          component={SignupTwo}
          options={{
            headerTransparent: true,
            headerTitle: (props) => <Logo {...props} />,
            headerRight: () => (
              <Text style={{ padding: 10, fontSize: 15 }}>Skip Here</Text>
            ),
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                style={{ padding: 10 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="SetPassword"
          component={SetPassword}
          options={{
            headerTransparent: true,
            headerTitle: (props) => <Logo {...props} />,
            headerRight: () => (
              <Text style={{ padding: 10, fontSize: 15 }}>Skip Here</Text>
            ),
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                style={{ padding: 10 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="Age"
          component={Age}
          options={{
            headerTransparent: true,
            headerTitle: (props) => <Logo {...props} />,
            headerRight: () => (
              <Text style={{ padding: 10, fontSize: 15 }}>Skip Here</Text>
            ),
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                style={{ padding: 10 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTransparent: true,
            headerTitle: (props) => <Logo {...props} />,
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                style={{ padding: 10 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="BasicInformation"
          component={BasicInformation}
          options={{
            //headerTransparent: true,
            headerTitle: (props) => <Logo {...props} />,
            headerLeft: () => (
              <Ionicons
                name="ios-arrow-back"
                size={25}
                color="black"
                style={{ padding: 10 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
