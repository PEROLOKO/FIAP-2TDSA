import React, {useContext} from 'react';

import {FlatList, Text} from 'react-native';

import {TodoContext} from '../Context/TodoContext';

const List = () => {
  const {tasks} = useContext(TodoContext);
  return (
    <FlatList
      style={{paddingHorizontal: 8}}
      data={tasks}
      renderItem={({item}) => <Text>{item.name}</Text>}
      keyExtractor={item => item.id}
    />
  );
};

export {List};
