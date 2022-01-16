import React, { createContext, useEffect, useState } from 'react';

export const TriggerFunction = createContext(null);

export default function TodoListContext({ children }) {
  const [count, setCount] = useState(0);
  const [state, setState] = useState([]);

  const handleDelete = (e) => {
    console.log('deleting');
  };

  useEffect(() => {
    console.log('context was rerendered');
    console.log(state.length);
  });

  useEffect(() => {
    try {
      const currentTodos = JSON.parse(localStorage.getItem('todos'));
      setState([...currentTodos]);
    } catch (error) {
      setState([]);
      console.log('error');
    }
  }, []);

  return (
    <TriggerFunction.Provider value={{ count, state, setState, setCount, handleDelete }}>
      {children}
    </TriggerFunction.Provider>
  );
}
