import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';

type ITodo = {
  id: string,
  title: string,
  completed: boolean,
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [] = useState<string[] | null>(null); // но тогда надо будет постоянно проверять на null
  const [] = useState<ITodo | null>(null); // с объектами

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  }

  const addTodo = () => {
    setTodos([text, ...todos]);
    setText('');
  }

  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
      <TodoItem id='122' completed={false} title='first todo' style={{border: '1px solid black'}} />
    </div>
  );
}

export default App;
