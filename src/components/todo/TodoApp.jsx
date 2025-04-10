import TodoData from "./Todo-Data";
import TodoNew from "./Todo-New";
import "./todo.css";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
const TodoApp = () => {
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
  );
};
export default TodoApp;
