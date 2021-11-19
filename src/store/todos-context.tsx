import React, { useState } from "react";
import { isPropertySignature } from "typescript";
import Todo from "../models/todo";


type ContextType = {
        items: Todo[];
        addNewTodo: (text: string) => void;
        removeTodo: (id: string) => void;
}
export const TodosContext = React.createContext<ContextType>({
  items: [],
  addNewTodo: () => {},
  removeTodo: (id: string) => {},
});


const TodoContextProveder: React.FC = (props) => {

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

const contextValue: ContextType  = {
    items: todos,
    addNewTodo: addNewTodo,
    removeTodo: removeTodoItem
}
    useState();
    return (
        <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
    )
}

export default TodoContextProveder