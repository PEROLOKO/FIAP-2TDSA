/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Node} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

import auth from "@react-native-firebase/auth";

const App: () => Node = () => {

  const [user, setUser] = useState();

  const doLoginAnonymous = async () => {
    const {user: userData} = await auth().signInAnonymously();
    setUser(userData);
  };

  return (
    <View>
      <Button title='Login Anônimo' onPress={doLoginAnonymous}/>
      <Text>ID:{user?.uid}</Text>
    </View>
  );
};

export default App;
