import React from "react";
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import style from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onDeleteTodoItem: (id: string) => void }> = (props) => {

   return (
    <ul className={style.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onDeleteTodoItem={props.onDeleteTodoItem.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
