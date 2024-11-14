import Task from "./item";

function TodosList(props) {
  const { list, onTaskDelete, onTaskComplete } = props;

  return (
    <div className="card" style={{ margin: "15px" }}>
      <ul className="list-group">
        {list.map((task) => (
       
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            isCompleted={task.completed} 
            onTaskDelete={onTaskDelete} 
            onTaskComplete={onTaskComplete} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodosList;
