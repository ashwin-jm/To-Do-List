import React from 'react'
import './Todo.css'

const Todo = ({text, todo, todos, setTodos}) => {

  const deleteHandler = () => {
    setTodos(todos.filter(elem => elem.id !== todo.id))
  }

  return (
    <div>
        <li className="list">
          <p>{text}
          <button onClick={deleteHandler} className="list-button">Delete</button>
          </p>
        </li>
    </div>
  )
}

export default Todo