import React, { useContext } from 'react';
import { TriggerFunction } from '../context';

export default function DisplayTodos() {
  const { state, handleDelete, setShowModal, showModal, setEditInfo } = useContext(TriggerFunction);
  console.log(state);

  const handleEdit = (id) => {
    setShowModal(!showModal);
    setEditInfo(id);
  };

  return (
    <div>
      {state.length > 0 &&
        state.map((item) => (
          <div key={item.id}>
            <span style={{ marginRight: 20 }}>{item.title}</span>
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        ))}

      {state.length === 0 && <div>No todos to display</div>}
    </div>
  );
}
