import React, { useState } from "react";
import { Text, TextInput, View } from "react-native/types";

const TodoListItem = (props:any) => {
    const { items } = props;
}

const TodoList = (props:any) => {
    const {title} = props;
    const [newItem, setNewItem] = useState(String);
    const [items, setItems] = useState(Array);

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
                <TextInput value={newItem} onChange={({ target: { value } }) => setNewItem(value)} />
            </View>
        </View>
    )
}

export default TodoList