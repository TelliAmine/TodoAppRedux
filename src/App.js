import React, { Component } from 'react';
import Todoitems from './components/Todoitems/Todoitems'
import Additems from './components/Additems/Additems'

import './App.css';

class App extends Component {  
  render() {
    return (
      <div className="App">
        TodoList 
        <Todoitems />
         <Additems /> 
      </div>
    );
  }
}

export default App;
