import React from 'react'
import './Form.css'

const Form = props => {

  const {inputText, setInputText, todos, setTodos} = props

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitToDoHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos ,{text:inputText, complete: false, id: Date.now()}
    ])
    setInputText("");

  }
  return (
    <div className="main">
        <input value={inputText} onChange={inputTextHandler} type="text" className="enter" placeholder="Enter any activity"></input>
        <button onClick={submitToDoHandler} type="submit" className="button">Add</button>
    </div>
    
  )
}

export default Form
