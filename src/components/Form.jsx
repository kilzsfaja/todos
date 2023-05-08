import React, { useState } from 'react'
import "../bootstrap.min.css"

function Form(props) {
  // creating state vars for inputs
  // const [todo, setTodo] = useState([])
  const [newTodo, setNewTodo] = useState("")

  // form submit function that adds to state
  const formSubmit = (e) => {
    e.preventDefault()
    props.addTodo(newTodo)
    setNewTodo('')

    // console.log('sup')
    // // update state
    // setTodo([...todo, newTodo])
    // // clear input
    // setNewTodo('')
  }

  return (
  <>
  <form onSubmit={formSubmit} className="form-floating mb-3">
    <input type="text" className="form-control" id="floatInt" onChange={ (e) => setNewTodo([e.target.value])} value={newTodo}/>
    <label htmlFor="floatInt">Add something To Do:</label>
    <button className="btn btn-info mt-3">Add</button>
  </form>
  </>
  )
}

export default Form