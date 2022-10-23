import { Todo, TodoState } from "../interfaces/Todo";

type TodoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: Todo };

export const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.complete = !todo.complete;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
