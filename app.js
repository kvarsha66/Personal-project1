App.js

import React from "react";
import Homepage from "Homepage";
import Login from "Login";
import Signup from "Signup";
import Afterlogin from "Afterlogin";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 


const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Afterlogin" component={Afterlogin}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


