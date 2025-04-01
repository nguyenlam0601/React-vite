import TodoData from "./components/todo/Todo-Data";
import TodoNew from "./components/todo/Todo-New";
import "./components/todo/todo.css"
import reactLogo from './assets/react.svg'
const App = () => {
  return (
    <>
      <div className="container">
        <div className="Todo-name">Todo List</div>
        <TodoNew />
        <TodoData />
        <div className="todo-logo">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
