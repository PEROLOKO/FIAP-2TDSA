import React from 'react';

import {Authors} from './Authors';
import {Books} from './Books';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="authors"
        component={Authors}
        options={{
          tabBarLabel: 'Autores',
          tabBarBadge: 5,
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={32} />,
        }}
      />
      <Stack.Screen name="books" component={Books} />
    </Stack.Navigator>
  );
};

export {Home};
