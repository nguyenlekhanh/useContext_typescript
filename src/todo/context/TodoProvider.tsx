import React, { useReducer } from "react";
import { Todo, TodoState } from "../interfaces/Todo";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIATE_STATE: TodoState = {
  todoCount: 0,
  todos: [
    { id: "1", description: "Lorem 1", complete: false },
    { id: "2", description: "Lorem 2", complete: false },
  ],
  complete: 0,
  pending: 0,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIATE_STATE);

  const toggleTodo = (todo: Todo) => {
    dispatch({ type: "toggleTodo", payload: todo });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
