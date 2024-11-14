import { useState } from "react";

function AddNewForm(props) {
  const { onNewNameAdded } = props;
  const [taskName, setTaskName] = useState("");

  return (
    <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task..."
          value={taskName}
          required
          onChange={(event) => {
            // update the taskName state
            setTaskName(event.target.value);
          }}
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event) => {
            // prevent default form submission behavior
            event.preventDefault();
            // check for empty string
            if (taskName === "") {
              alert("Please enter the task");
            } else {
              // passing the name back to the parent component
              onNewNameAdded(taskName);
              // reset the state
              setTaskName("");
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNewForm;
