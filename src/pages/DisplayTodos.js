import React, { useContext } from 'react';
import { TriggerFunction } from '../context';

export default function DisplayTodos() {
  const { state } = useContext(TriggerFunction);
  console.log(state);

  return (
    <div>
      {state.length > 0 &&
        state.map((item, index) => (
          <div key={item.id}>
            {index + 1} {item.title}
          </div>
        ))}

      {state.length === 0 && <div>No todos to display</div>}
    </div>
  );
}
