/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';

const TodoList = props => {
  const {title} = props;

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const add = () => {
    setItems([...items, newItem]);
    setNewItem('');
  }

  const clear = () => {
    setItems([]);
    setNewItem('');
  }

  return (
    <View>
      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text>{title}</Text>
        <TextInput onChangeText={setNewItem} value={newItem}/>
        <Button title='Add' onPress={add}/>
        <Button title='Clear' onPress={clear}/>
      </View>
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={()=>Math.random()}
      />
    </View>
  );
};

export default TodoList;
