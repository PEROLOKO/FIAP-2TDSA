import React, { useState } from "react";
import { styles } from "./styles";
import { HoverButton } from "./Components/HoverButton";

const TodoListItems = (props) => {
    const { items } = props;
    return (
        <ul>
            {items.map(item => <li style={styles.todoItem}>{item}</li>)}
        </ul>
    )
}

const TodoList = (props) => {
    const {title} = props;
    const [newItem, setNewItem] = useState('')
    const [items, setItems] = useState([])

    const add = () => {
        setItems([...items, newItem]);
        setNewItem('');
    }

    const clear = () => {
        setItems([]);
        setNewItem('');
    }

    return (
        <div>
            <p>{title}</p>
            <div>
                <input style={styles.input} type="text" value={newItem} onChange={({ target: { value } }) => setNewItem(value)} />
                <HoverButton event={add} caption="Add"/>
                <HoverButton event={clear} caption="Clear"/>
            </div>
            <TodoListItems style={styles.list} items={items}/>
        </div>
    )
}

export default TodoList;