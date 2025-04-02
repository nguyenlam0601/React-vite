const TodoData = (props) => {
  const { name, data } = props;

  return (
    <div className="Todo-body">
      <div className="Todo-data">
        <div className="data-content">Do homework {name}</div>
        <div className="data-btn">
          <button>Delete</button>
          <button>Update</button>
        </div>
      </div>
      <div className="Todo-data">
        <div className="data-content">My age is {data.age}</div>
        <div className="data-btn">
          <button>Delete</button>
          <button>Update</button>
        </div>
      </div>
      <div className="Todo-data">
        <div className="data-content">{JSON.stringify(props.todoList)}</div>
      </div>
    </div>
  );
};
export default TodoData;
