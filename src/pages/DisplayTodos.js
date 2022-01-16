import React, { useContext, useEffect, useState } from 'react';
import { TriggerFunction } from '../context';
import { v4 as uuidv4 } from 'uuid';

export default function DisplayTodos() {
  const { state, count } = useContext(TriggerFunction);
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
