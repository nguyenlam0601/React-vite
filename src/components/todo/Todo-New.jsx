import { useState } from "react";

const TodoNew = (props) => {
  const [inputValue, setValue] = useState("eric");
  const { myFucntion } = props;
  const handleClick = () => {
    myFucntion(inputValue);
    setValue("");
  };
  const handleOnchage = (name) => {
    setValue(name);
  };
  return (
    <div className="Todo-header">
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(event) => {
          handleOnchage(event.target.value);
        }}
        value={inputValue}
      ></input>
      <button onClick={handleClick}> Add</button>
    </div>
  );
};
export default TodoNew;
