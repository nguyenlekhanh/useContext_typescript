import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/Todo";

export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (todo: Todo) => void;
};

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
