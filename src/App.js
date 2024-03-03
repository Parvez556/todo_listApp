import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
 
  let [todo, setTodo] = useState([])
  let [editigflag,setEditingflag]=useState(-1)
  const [editedTodo, setEditedTodo] = useState('');
  
  //Add Todo Features.......
  const addTodo=() =>{
      //console.log("addTodo");
      let text=document.getElementById("input").value ;
      
     
      let todoObject={
        id:todo.length+1,
        title:text,
        complete:false
      }
     
      
     console.log(text);
 
    todo.push(todoObject);
    setTodo([...todo]);

  }
  console.log("todo length is"+todo.length)
  // Delete Features Code......
  const deleteTodo = (id) => {
    console.log("Delete a todo", id);
    console.log(id);
    setTodo(todo.filter(todoTemp => todoTemp.id !== id));
  }
  //Checkbox Complete Code.......
  const check=(id)=>{
    console.log("Hello ",id);
    todo=todo.map(todoTemp=>
      {
      if(id === todoTemp.id){
        todoTemp.complete = !todoTemp.complete;
      }
       return todoTemp;
     
    })
    setTodo([...todo])
  }
  //edit features code.......
  const edit=(id)=>{
    console.log("edit",id)
    setEditingflag(id)
  }
  //Save Todo function...
  // const SaveEditTodo=(id)=>{
  //   console.log("Hello",id);
  //   let UpdateTodo=document.getElementById("editingTodo").value;
  //   console.log(UpdateTodo);

  //   todo=todo.map(todoTemp=>{
  //     if(todoTemp.id === id){
  //       todoTemp.title = UpdateTodo ;
  //     }
  //     return todoTemp;
  //   })
  //   setTodo([...todo])
  //   setEditingflag(-1);
  // } 
  const SaveEditTodo = (id) => {
    const updatedTodo = todo.map((todoTemp) => {
      if (todoTemp.id === id) {
        return { ...todoTemp, title: editedTodo };
      }
      return todoTemp;
    });
  
    setTodo(updatedTodo);
    setEditingflag(-1);
    setEditedTodo(""); // Clear the editedTodo state after saving
  };
  

  
  return (
   <div id='a'>
    <h1 align="center">TodoList App</h1>
    <input id="input" type="text" placeholder="Enter Todo Here..."></input>
    <button onClick={addTodo}>Add Todo</button><br></br>
    {  
  todo.map((todoTemp) => (
    <div key={todoTemp.id} id='a'>
      
          <input
            type='checkbox'
            onChange={() => check(todoTemp.id)}
            checked={todoTemp.complete}
          />
          {todoTemp.complete ? (
            <span style={{ textDecoration: 'line-through' }}>
              {todoTemp.title}
            </span>
          ) : (
            <span>{
              
            editigflag===todoTemp.id?<>    <input
            type='text'
            id='editedTodo'
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          
          
            <button onClick={() => deleteTodo(todoTemp.id)}>Delete</button>
             <button onClick={()=>SaveEditTodo(todoTemp.id)}>Save</button></>
          : <>{todoTemp.title}
            <button onClick={() => deleteTodo(todoTemp.id)}>Delete</button>
             <button onClick={() => edit(todoTemp.id)}>Edit</button></>
          
}

            </span>
            
          )}
          
   
    </div>
  ))
}
                                                 

   </div>

  );
}

export default App;

