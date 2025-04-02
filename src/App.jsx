import TodoData from "./components/todo/Todo-Data";
import TodoNew from "./components/todo/Todo-New";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
const App = () => {
  const name = "Eric";
  const data = { age: 24, address: "HY" };
  const myFucntion = (name) => {
    alert(`call me ${name}`);
  };
  return (
    <>
      <div className="container">
        <div className="Todo-name">Todo List</div>
        <TodoNew myFucntion={myFucntion} />
        <TodoData name={name} data={data} />
        <div className="todo-logo">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
