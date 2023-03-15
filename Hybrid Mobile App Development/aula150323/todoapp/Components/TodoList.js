/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, FlatList, ScrollView, Text, TextInput, View} from 'react-native';

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
      <Text>{title}</Text>
      <View>
        <TextInput onChangeText={setNewItem} value={newItem}/>
        <Button title='Add' onPress={add}/>
        <Button title='Clear' onPress={clear}/>
      </View>
      <ScrollView>
        {items.map(item => (
          <Text>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default TodoList;
