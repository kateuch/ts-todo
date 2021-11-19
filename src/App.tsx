import Todo from "./models/todo";
import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

const initialTodos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((current) => {
      return todos.concat(newTodo);
    });
  };

  const removeTodoItem = (id: string) => {
        setTodos((prevTodos) => {
          return  prevTodos.filter(item => item.id !== id)
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addNewTodo} />
      <Todos items={todos} onDeleteTodoItem={removeTodoItem}/>

    </div>
  );
}

export default App;
