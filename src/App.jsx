import TodoData from "./components/todo/Todo-Data";
import TodoNew from "./components/todo/Todo-New";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
const App = () => {
  const name = "Eric";
  const data = { age: 24, address: "HY" };

  const [todoList, setTodoList] = useState([]);

  const myFucntion = (name) => {
    const newTodo = { id: getRandomInt(1, 100), name: name };
    setTodoList([...todoList, newTodo]);
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const deleteData = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);

    setTodoList(newTodo);
  };
  const updateData = (id, content) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) =>
        item.id == id ? { ...item, name: content } : item
      )
    );
  };
  const deleteAllTodo = () => {
    setTodoList([]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="Todo-name">Todo List</div>
        <TodoNew myFucntion={myFucntion} />
        {todoList.length > 0 ? (
          <>
            <TodoData
              name={name}
              data={data}
              todoList={todoList}
              deleteData={deleteData}
              updateData={updateData}
            />
            <div className="todo-delete">
              <button onClick={deleteAllTodo}>Delete All</button>
            </div>
          </>
        ) : (
          <div className="todo-logo">
            <img src={reactLogo} alt="" className="logo" />
          </div>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
