import React from 'react';

import {View, Text, Image, Button} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {List} from './List';
import {Details} from './Details';

const Stack = createNativeStackNavigator();

const HeaderTitle = ({children}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{width: 50, height: 50, marginRight: 10}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Text style={{fontSize: 24, color: '#ff0000'}}>{children}</Text>
    </View>
  );
};

const Authors = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <Button title="Add" />,
        headerTitle: props => <HeaderTitle {...props} />,
        headerTintColor: '#ff0000',
        headerStyle: {
          backgroundColor: '#0000ff',
        },
      }}>
      <Stack.Screen name="authorList" component={List} />
      <Stack.Screen name="authorDetails" component={Details} />
    </Stack.Navigator>
  );
};

export {Authors};
