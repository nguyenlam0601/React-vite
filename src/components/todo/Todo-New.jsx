const TodoNew = (props) => {
  const { myFucntion } = props;
  myFucntion("Ray");
  return (
    <div className="Todo-header">
      <input type="text" placeholder="Enter your task"></input>
      <button> Add</button>
    </div>
  );
};
export default TodoNew;
