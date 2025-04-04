const TodoData = (props) => {
  const { todoList } = props;

  return (
    <div className="Todo-body">
      {todoList.map((item) => {
        console.log("value", item.name);
        return (
          <div className="Todo-data" key={item.id}>
            <div className="data-content">{item.name}</div>
            <div className="data-btn">
              <button>Delete</button>
              <button>Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
