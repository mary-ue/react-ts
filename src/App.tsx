import React, { useState, useEffect } from 'react';
import './App.css';
import { Todo } from './types';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {
  // const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [] = useState<string[] | null>(null); // но тогда надо будет постоянно проверять на null
  // const [] = useState<ITodo | null>(null); // с объектами

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo, ...todos]);
  }

  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        completed: !todo.completed,
      }
    }))
  }

  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => res.json())
  //     .then((data: Todo[]) => {
  //       setTodos(data);
  //     })
  // }, [])

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
