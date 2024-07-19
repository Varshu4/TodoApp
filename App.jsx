import { useState } from 'react';
import './App.css';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';

function App() {

  const [inputVal , setInputVal] = useState('')

  const [todos , setTodos] = useState([])

  //helps to write the task
  function writeTodo(e){
    setInputVal(e.target.value)
  }

  //to mantain an array is the job of this function
  function addTodo() {
    if(inputVal != ''){
      setTodos((prevTodos) => [...prevTodos, inputVal])
      setInputVal('')
    }
  }

  console.log(todos)

  function delTodo(todoIndex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos , prevTodosIndex) =>{
      return prevTodosIndex != todoIndex
    })
  );
  }
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>

      <TodoContainer todos={todos} delTodo={delTodo}/>
    </main>
  );
}

export default App
