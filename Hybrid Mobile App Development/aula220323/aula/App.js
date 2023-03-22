/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Node from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatListIbge from './Components/FlatListIbge';

const App = () => {
  return (
    <SafeAreaView>
      <FlatListIbge/>
    </SafeAreaView>
  );
};

export default App;
