import React from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';

const ListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('authorDetails', {author: item})}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const List = ({navigation}) => {
  return (
    <FlatList
      data={[{id: 1, name: 'Machado de Assis'}]}
      keyExtractor={item => item.id}
      renderItem={props => <ListItem navigation={navigation} {...props} />}
    />
  );
};

export {List};
