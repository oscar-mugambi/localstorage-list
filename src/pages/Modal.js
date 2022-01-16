import React, { useContext, useEffect, useState } from 'react';
import { TriggerFunction } from '../context';

export default function Modal() {
  const { editTodo, editInfo, state } = useContext(TriggerFunction);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const { title, id } = state.find((todo) => todo.id === editInfo);
    setTitle(title);
  }, []);

  return (
    <form onSubmit={(e) => editTodo(e, title)}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Edit A Todo'
      />
      <button>Submit</button>
    </form>
  );
}
