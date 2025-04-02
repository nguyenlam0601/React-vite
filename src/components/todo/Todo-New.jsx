import { useState } from "react";

const TodoNew = (props) => {
  const [inputValue, setValue] = useState('eric')
  const handleClick = () => {
    console.log('value: ', inputValue)
  };
  const handleOnchage = (name) => {
    setValue(name)
  };
  return (
    <div className="Todo-header">
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(event) => {
          handleOnchage(event.target.value);
        }}
      ></input>
      <button onClick={handleClick}> Add</button>
      <div>Input value: {inputValue}</div>
    </div>
  );
};
export default TodoNew;
