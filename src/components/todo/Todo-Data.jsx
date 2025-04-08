import { useState } from "react";

const TodoData = (props) => {
  const { todoList, deleteData } = props;
  const [updateFlg, setUpdateFlg] = useState(false);
  const getId = (id) => {
    deleteData(id);
  };
  const updateItem = (index) => {
    setUpdateFlg(true);
    alert(index);
  };
  return (
    <div className="Todo-body">
      {todoList.map((item, index) => {
        console.log("value", item.name);
        return (
          <div className="Todo-data" key={item.id}>
            {
              (updateFlg = false ? (
                <input type="text" />
              ) : (
                <div className="data-content">{item.name}</div>
              ))
            }
            <div className="data-btn">
              <button onClick={() => getId(item.id)}>Delete</button>
              <button onClick={() => updateItem(index)}>Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
