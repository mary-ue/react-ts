import React, { useState, useEffect } from 'react';
import './App.css';
import { Todo } from './types';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';

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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      })
  }, [])

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoItem id='122' completed={false} title='first todo' style={{border: '1px solid black'}} />
    </div>
  );
}

export default App;
