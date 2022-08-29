import React from 'react'
import Todo from './Todo.js';
import './ToDoList.css';

const ToDoList = ({todos, setTodos}) => {
  return (
    <div>
        <ul className="list">
            {todos.map((todo) =>(
              <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} text={todo.text} />
            ))}
        </ul>
    </div>
  )
}

export default ToDoList