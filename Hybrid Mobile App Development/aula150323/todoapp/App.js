/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import TodoList from './Components/TodoFlatList';

const App = () => {
  return (
    <SafeAreaView>
      <TodoList title="TodoList"/>
    </SafeAreaView>
  );
};

export default App;
