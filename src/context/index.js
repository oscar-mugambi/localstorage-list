import React, { createContext, useEffect, useState } from 'react';

export const TriggerFunction = createContext(null);

export default function TodoListContext({ children }) {
  const [count, setCount] = useState(0);
  const [state, setState] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editInfo, setEditInfo] = useState(null);

  const handleDelete = (id) => {
    const newTodos = state.filter((item) => item.id !== id);
    setState(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const editTodo = (e, newTitle) => {
    e.preventDefault();
    const todos = state.map((todo) => {
      return todo.id === editInfo ? { ...todo, title: newTitle } : todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    setState(todos);
    setShowModal(!showModal);
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
    <TriggerFunction.Provider
      value={{
        count,
        state,
        setState,
        setCount,
        handleDelete,
        setShowModal,
        showModal,
        editTodo,
        editInfo,
        setEditInfo,
      }}
    >
      {children}
    </TriggerFunction.Provider>
  );
}
