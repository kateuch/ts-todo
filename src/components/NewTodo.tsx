import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw Error;
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
