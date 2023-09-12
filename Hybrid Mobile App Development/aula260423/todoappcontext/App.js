/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {TodoProvider} from './Context/TodoContext';

import {Form} from './Components/Form';

import {List} from './Components/List';

const App: () => Node = () => {
  return (
    <TodoProvider>
      <Form />
      <List />
    </TodoProvider>
  );
};

export default App;
