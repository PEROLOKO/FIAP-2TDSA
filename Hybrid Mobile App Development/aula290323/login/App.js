/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Text,
} from 'react-native';

import { Login } from './Screens/Login';
import { Cadastro } from './Screens/Cadastro';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="cadastro" component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
