import { useState } from "react";
import "./bootstrap.min.css"
import Form from "./components/Form";
import Display from "./components/Display";

function App() {

  const [todo, setTodo] = useState([
    {text: "Cook", complete: false},
    {text: "Clean", complete: false},
    ]);

  // function to addtodo to state here
  const addTodo = (newTodo) => {
    setTodo([...todo, { text: newTodo, complete: false}])
    }

  // deleteTodo from state here
  const deleteTodo = (idx) => {
    const newTodo = [...todo]
    newTodo.splice(idx,1)
    setTodo(newTodo)
  }

  const toggleComplete = (idx) => {
    const newTodo = [...todo]
    newTodo[idx].complete = !newTodo[idx].complete;
    setTodo(newTodo);
  }

  return (
    <div className="container">
      <h1 className="text-center my-5">FREDO'S TO DO APP: </h1>
      {/* <p>{JSON.stringify(todo)}</p> */}
      <Form addTodo={addTodo}/>
      <Display todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;
