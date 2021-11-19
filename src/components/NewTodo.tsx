import React from "react";
import { useRef } from "react";
import style from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null)

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      ;
      return;
    }
    props.onAddTodo(enteredText);
    formRef.current!.reset()
  };

  return (
    <form className = {style.form} onSubmit={submitForm} ref={formRef}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
