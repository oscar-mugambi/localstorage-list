import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TriggerFunction } from '../context';
import './styles.css';

export default function AddTodo() {
  const [todo, setTodo] = useState('');
  const { setState, setCount } = useContext(TriggerFunction);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoObj = {
      id: uuidv4(),
      title: todo,
      completed: false,
    };

    let savedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(typeof savedTodos);

    if (savedTodos !== null) {
      const newTodos = [...savedTodos, todoObj];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setState(newTodos);
      setCount((prev) => prev + 1);
    } else {
      const todosArr = [todoObj];
      localStorage.setItem('todos', JSON.stringify(todosArr));
      setState(todosArr);
      setCount((prev) => prev + 1);
    }

    setTodo('');
  };

  return (
    <form className='todo-form-input' onSubmit={handleSubmit}>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Add A Todo'
      />
      <button>Submit</button>
    </form>
  );
}
