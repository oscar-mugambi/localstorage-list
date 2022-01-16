import React, { useContext, useState } from 'react';
import { TriggerFunction } from '../context';

export default function Modal() {
  const [todo, setTodo] = useState('');
  const { editTodo } = useContext(TriggerFunction);

  return (
    <form onSubmit={editTodo}>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Edit A Todo'
      />
      <button>Submit</button>
    </form>
  );
}
