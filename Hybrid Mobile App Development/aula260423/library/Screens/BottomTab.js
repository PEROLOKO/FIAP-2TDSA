import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Authors} from './Authors';
import {Books} from './Books';

const Stack = createBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="authors" component={Authors} />
      <Stack.Screen name="books" component={Books} />
    </Stack.Navigator>
  );
};

export {Home};
