import React, {useState, useContext} from 'react';

import {View, TextInput, Button} from 'react-native';

import {TodoContext} from '../Context/TodoContext';

const Form = () => {
  const {add} = useContext(TodoContext);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = () => {
    add(newTask);
    setNewTask('');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <TextInput
        placeholder="Type the task you want to add"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

export {Form};
