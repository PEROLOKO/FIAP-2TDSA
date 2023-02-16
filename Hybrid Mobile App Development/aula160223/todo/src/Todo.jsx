import React, { Component } from "react";

class Todo extends Component {
    
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

    render(){
        return(
            <div>
                <div>
                    <p>My To-Do List</p>
                </div>
                <div>
                    <input type="text"
                        value={this.state.newItem}
                        onChange={(event) => this.setState({...this.state, newItem: event.target.value})} />
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.clear}>Clear</button>
                </div>
                <div>
                    {this.state.items.map(item => <div><p>{item}</p><button onClick={this.remove(item)}>Remove</button></div>)}
                </div>
            </div>
        )
    }
}

export default Todo;