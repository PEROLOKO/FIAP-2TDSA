import React from 'react';
import { Node } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from "./Screens/Login";
import { Details } from "./Screens/Details";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
