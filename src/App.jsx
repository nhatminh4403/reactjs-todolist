import { useState,useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function presistData(newList) {
    localStorage.setItem('todos',JSON.stringify({
      todos: newList
    }))
  }

  function handleAddTodos(newToDo) {
    const newToDoList = [...todos,newToDo];
    presistData(newToDoList);
    setTodos(newToDoList);
  }

  function handleDeteleTodo(index){
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index;
    })
    presistData(newTodoList);

    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeteleTodo(index);
  }

  useEffect(()=>{
    if(!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    if(!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  },[])

  return (
    <main>
      <ToDoInput todoValue={todoValue} 
      setTodoValue={setTodoValue}
      handleAddTodos = {handleAddTodos}/>
      <ToDoList todos={todos}
       handleDeteleTodo={handleDeteleTodo}
        handleEditTodo={handleEditTodo} />
    </main>
  );
}
export default App;
