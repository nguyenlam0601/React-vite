const TodoNew = (props) => {
  const { myFucntion } = props;
  const handleClick = () => {
    alert("click me");
  };
  const handleOnchage = (name) => {
    console.log(name);
  };
  myFucntion("Ray");
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
    </div>
  );
};
export default TodoNew;
