import React, { Component } from 'react';
import './App.css';
import TodoList from './Function';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoList title="Pessoais"/>
      </div>
    );
  }
}

export default App;
