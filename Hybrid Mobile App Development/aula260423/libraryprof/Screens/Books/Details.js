import React from 'react';
import {Text, View} from 'react-native';

const Details = ({route}) => {
  const {book} = route.params;

  return (
    <View>
      <Text>Book</Text>
      <Text>{book.name}</Text>
    </View>
  );
};

export {Details};
