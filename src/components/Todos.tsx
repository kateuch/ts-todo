import React, { useContext } from "react";
import TodoItem from './TodoItem';
import style from './Todos.module.css';
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {

const todoCtx = useContext(TodosContext)

   return (
    <ul className={style.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onDeleteTodoItem={todoCtx.removeTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
