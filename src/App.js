import React, { useState } from 'react'
import './App.css';
import Form  from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    
    <div className="App">
      <header>
        <h1 style={{color:"black"}}>My To do list</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
    
   
  );
}

export default App;
