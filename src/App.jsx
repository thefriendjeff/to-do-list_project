import { useState } from 'react';
import Todo from "./components/Todo";
import "./App.css";
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      catogory: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      catogory: "pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Esatudar react",
      catogory: "estudos",
      isCompleted: false,
    },
  ])


  return <div className="App">
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
    <TodoForm />
  </div>
}

export default App
