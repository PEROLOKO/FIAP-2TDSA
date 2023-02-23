import React, { Component } from "react";

class TodoList extends Component {
    state = { items: [], newItem: '' };

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.clear = this.clear.bind(this);
    }

    add = () => {
        this.setState({
            items: [...this.state.items, this.state.newItem],
            newItem: ''
        })
    }

    clear() {
        this.setState({
            items: [],
            newItem: ''
        })
    }

    render() {
        const { newItem } = this.state;
        return (
            <div>
                <p>My To-Do List (Class Component)</p>
                <div>
                    <input type="text" value={newItem} onChange={({ target: { value } }) => this.setState({ ...this.state, newItem: value })} />
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.clear}>Clear</button>
                </div>
                <div>
                    {this.state.items.map(item => <p>{item}</p>)}
                </div>
            </div>
        )
    }
}

export default TodoList;