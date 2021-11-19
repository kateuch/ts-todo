import Todo from "./models/todo";
import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";
import { useState } from "react";
import TodoContextProveder from "./store/todos-context";

const initialTodos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

function App() {

  return (
    <TodoContextProveder>    <div className="App">
      <NewTodo/>
      <Todos />

    </div>
    </TodoContextProveder>
  );
}

export default App;
