import React from "react";
import style from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onDeleteTodoItem: (event: React.MouseEvent) => void }> = (
  props
) => {
  return (
        <li className={style.item} onClick={props.onDeleteTodoItem}>{props.text}</li>
  );
};

export default TodoItem;
