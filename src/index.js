import React from 'react';
import TodoListContext from './context/index';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TodoListContext>
      <App />
    </TodoListContext>
  </React.StrictMode>,
  document.getElementById('root')
);
