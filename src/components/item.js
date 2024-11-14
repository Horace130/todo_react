function Task(props) {
  const { id, name = "No Task", isCompleted, onTaskDelete, onTaskComplete } = props;

  // Render the task as completed
  if (isCompleted) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-sm btn-success" onClick={() => onTaskComplete(id)}>
            <i className="bi bi-check-square"></i>
          </button>
          <span className="ms-3 text-decoration-line-through">{name}</span>
        </div>
        <div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              const confirm = window.confirm("Are you sure you want to delete this task?");
              if (confirm) {
                onTaskDelete(id);
              }
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    );
  }

  // Render the task as incomplete
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button className="btn btn-sm btn-light" onClick={() => onTaskComplete(id)}>
          <i className="bi bi-square"></i>
        </button>
        <span className="ms-3">{name}</span>
      </div>
      <div>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            const confirm = window.confirm("Are you sure you want to delete this task?");
            if (confirm) {
              onTaskDelete(id);
            }
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
export default Task;