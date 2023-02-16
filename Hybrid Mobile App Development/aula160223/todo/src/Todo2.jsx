import React, { useState } from "react";

const Todo = () => {
    /*
    state = {newItem: '', items: []};

    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.clear = this.clear.bind(this);
        this.remove = this.remove.bind(this);
    }

    add = () => {
        this.setState({
            items: [...this.state.items, this.state.newItem],
            newItem: ''
        })
    }

    clear = () => {
        this.setState({
            items: [],
        })
    }

    remove = (item) => {
        this.setState({
            items: [...this.state.items]
        })
    }
    */

    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);

    const add = () => {
        setItems([...items, newItem]);
        setNewItem('');
    }

    const clear = () => {
        setItems([]);
    }

    const remove = (item) => {
        
    }

    return(
        <div>
            <div>
                <p>My To-Do List</p>
            </div>
            <div>
                <input type="text"
                    value={newItem}
                    onChange={(event) => setNewItem(event.target.value)} />
                <button onClick={add}>Add</button>
                <button onClick={clear}>Clear</button>
            </div>
            <div>
                {items.map(item => <div><p>{item}</p><button onClick={remove(item)}>Remove</button></div>)}
            </div>
        </div>
        )
}

export default Todo;