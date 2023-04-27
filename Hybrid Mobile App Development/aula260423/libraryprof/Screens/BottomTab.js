import React from 'react';

import {Authors} from './Authors';
import {Books} from './Books';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenListeners={event => console.log(event.route.state)}>
      <Tab.Screen
        name="authors"
        component={Authors}
        options={{
          title: 'Autores',
          tabBarBadge: 5,
          tabBarBadgeStyle: {
            backgroundColor: '#a1a1a1',
            color: '#0000ff',
          },
          tabBarIcon: () => <Icon name="user" size={24} />,
        }}
      />
      <Tab.Screen
        name="books"
        component={Books}
        options={{
          title: 'Books',
          tabBarIcon: () => <Icon name="book" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export {Home};
