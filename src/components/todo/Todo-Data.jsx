import { useState } from "react";

const TodoData = (props) => {
  const { todoList, deleteData } = props;
  const getId = (id) => {
    deleteData(id);
  };

  return (
    <div className="Todo-body">
      {todoList.map((item) => {
        console.log("value", item.name);
        return (
          <div className="Todo-data" key={item.id}>
            <div className="data-content">{item.name}</div>
            <div className="data-btn">
              <button onClick={() => getId(item.id)}>Delete</button>
              <button>Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
