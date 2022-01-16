import './App.css';
import AddTodo from './pages/AddTodo';
import DisplayTodos from './pages/DisplayTodos';
import TodoListContext from './context/index';

function App() {
  return (
    <TodoListContext>
      <div className='App'>
        <AddTodo />
        <DisplayTodos />
      </div>
    </TodoListContext>
  );
}

export default App;
