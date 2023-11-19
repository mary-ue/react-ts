import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  list: Todo[],
  toggleTodo: (id: Todo['id']) => void,
  removeTodo: (id: Todo['id']) => void,
}

const TodoList = ({ list, removeTodo, toggleTodo }: TodoListProps) => {
  return (
    <ul>
      {list.map((todo) => {
        return <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      })}
    </ul>
  );
}

export default TodoList;