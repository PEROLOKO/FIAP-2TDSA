import React from 'react';

import {Authors} from './Authors';
import {Books} from './Books';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="authors" component={Authors} />
      <Stack.Screen name="books" component={Books} />
    </Stack.Navigator>
  );
};

export {Home};
