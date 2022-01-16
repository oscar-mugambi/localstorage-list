import { useContext } from 'react';
import './App.css';
import AddTodo from './pages/AddTodo';
import DisplayTodos from './pages/DisplayTodos';
import { TriggerFunction } from './context/index';
import Modal from './pages/Modal';

function App() {
  const { showModal } = useContext(TriggerFunction);

  return (
    <div className='App'>
      <AddTodo />
      <DisplayTodos />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
