import React from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';

const ListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('bookDetails', {book: item})}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const List = ({navigation}) => {
  return (
    <FlatList
      data={[{id: 1, name: 'Memórias Postumas de Brás Cubas'}]}
      keyExtractor={item => item.id}
      renderItem={props => <ListItem navigation={navigation} {...props} />}
    />
  );
};

export {List};
