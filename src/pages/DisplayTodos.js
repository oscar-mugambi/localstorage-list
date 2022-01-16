import React, { useContext } from 'react';
import { TriggerFunction } from '../context';

export default function DisplayTodos() {
  const { state, handleDelete } = useContext(TriggerFunction);
  console.log(state);

  return (
    <div>
      {state.length > 0 &&
        state.map((item, index) => (
          <>
            <div key={item.id}>
              <span style={{ marginRight: 20 }}>
                {index + 1} {item.title}
              </span>
              <button onClick={handleDelete}>delete</button>
            </div>
          </>
        ))}

      {state.length === 0 && <div>No todos to display</div>}
    </div>
  );
}
