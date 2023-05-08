import React from 'react'
import "../bootstrap.min.css"

const Display = (props) => {

  const deleteTodo = (idx) => {
    props.deleteTodo(idx)
  }

  const toggleComplete = (idx) => {
    props.toggleComplete(idx)
  }
  
  return (
    <>
    {/* {JSON.stringify(todo)} */}
    {props.todo.map( (todo, idx) => {
    return (
      <div key={idx} className='card mb-3'>
        <div className="card-body">
          <input type="checkbox" checked={todo.complete} onChange={ () => toggleComplete(idx)}/><p></p>
          <p className="card-text">{todo.complete === true ? <s>todo.text</s> :todo.text }</p>
          <button className="btn btn-danger" onClick={() => deleteTodo(idx)}>X</button>
        </div>
      </div>
    )
  })}
    </>
  )
}

export default Display