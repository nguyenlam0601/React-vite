import { useState } from "react";

const TodoData = (props) => {
  const { todoList, deleteData, updateData } = props;
  const [updateFlg, setUpdateFlg] = useState({});
  const [inputValueUpdate, setValueUpdate] = useState("");
  const getId = (id) => {
    deleteData(id);
  };
  const updateItem = (id) => {
    setUpdateFlg((prevFlags) => ({
      ...prevFlags,
      [id]: !prevFlags[id],
    }));
    if (inputValueUpdate.length > 0) {
      updateData(id, inputValueUpdate);
    }
  };
  const handleOnchage = (name) => {
    setValueUpdate(name);
  };
  return (
    <div className="Todo-body">
      {todoList.map((item) => {
        return (
          <div className="Todo-data" key={item.id}>
            {updateFlg[item.id] ? (
              <input
                type="text"
                onChange={(event) => {
                  handleOnchage(event.target.value);
                }}
                value={inputValueUpdate}
              />
            ) : (
              <div className="data-content">{item.name}</div>
            )}
            <div className="data-btn">
              <button onClick={() => getId(item.id)}>Delete</button>
              <button onClick={() => updateItem(item.id)}>Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
