export interface Todo {
  id: string;
  description: string;
  complete: boolean;
}

export interface TodoState {
  todoCount: number;
  todos: Todo[];
  pending: number;
  complete: number;
}
