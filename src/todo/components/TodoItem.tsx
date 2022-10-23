import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/Todo";

interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useContext(TodoContext);

  const handleDbClick = () => {
    toggleTodo(todo);
    //console.log("handleDbclick", todo.description);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.complete ? "line-through" : "",
      }}
      onDoubleClick={handleDbClick}
    >
      {todo.description}
    </li>
  );
};
