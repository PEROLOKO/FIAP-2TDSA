import React from 'react';

import {View, Text} from 'react-native';

const Details = ({route}) => {
  const {author} = route.params;
  return (
    <View>
      <Text>Author</Text>
      <Text>{author.name}</Text>
    </View>
  );
};

export {Details};
