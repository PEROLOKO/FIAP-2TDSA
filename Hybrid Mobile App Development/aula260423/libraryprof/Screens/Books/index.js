import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {List} from './List';
import {Details} from './Details';

import {View, Text, Image, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

const HeaderTitle = ({children}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{width: 50, height: 50, marginRight: 10}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Text style={{fontSize: 36, color: '#ff4444'}}>{children}</Text>
    </View>
  );
};

const Books = () => {
  return (
    <Stack.Navigator
      initialRouteName="bookList"
      screenOptions={{
        headerTitle: props => <HeaderTitle {...props} />,
        headerTintColor: '#a1a1a1',
        headerStyle: {
          backgroundColor: '#4444ff',
        },
      }}>
      <Stack.Screen
        name="bookList"
        component={List}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Some relevant info')}>
              <Text>Info</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="bookDetails" component={Details} />
    </Stack.Navigator>
  );
};

export {Books};
