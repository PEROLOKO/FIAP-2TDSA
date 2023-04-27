import React from 'react';

import {Authors} from './Authors';
import {Books} from './Books';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="authors"
        component={Authors}
        options={{
          drawerLabel: 'Autores',
          drawerIcon: () => <Icon name="user" />,
        }}
      />
      <Drawer.Screen name="books" component={Books} />
    </Drawer.Navigator>
  );
};

export {Home};
