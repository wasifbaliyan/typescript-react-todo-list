import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const initialTodos:Todo[] = [
  {id: 1, text: "Go to the gym", done: false},
  {id: 2, text: "Work on typescript", done: true},
]

const App = ()=> {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const toggleTodo:ToggleTodo = (selectedTodo) => {
    let newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    })
   setTodos(newTodos);
  }

  const handleChange:HandleChange = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo:AddTodo = (todo) => {
    if(todo.trim() !== ""){
      setTodos([...todos, {text: todo, id: todos.length+2, done: false}])

    }
    setNewTodo("")
  }

  return (
    <div>
      <h1>TypeScript Todos App</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodo newTodo={newTodo} addTodo={addTodo} handleChange={handleChange}/>
    </div>
  );
}


export default App;
