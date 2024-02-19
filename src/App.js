import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  const [todo, setTodo] = useState([])
  const addTodo=() =>{
      //console.log("addTodo");
      let text=document.getElementById("input").value ;
      console.log(text);
    todo.push(text);
    setTodo([...todo]);

  }
  console.log("todo length is"+todo.length)
  return (
   <div>
    <h1 align="center">TodoList App</h1>
    <input id="input" type="text" placeholder="Enter Todo Here..."></input>
    <button onClick={addTodo}>Add Todo</button><br></br>
    {
      todo.map(todoTemp=>{
     return <ul><li>{todoTemp}</li></ul>
        })
    }
   </div>

  );
}

export default App;
