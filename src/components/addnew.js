import { useState } from "react";
import { nanoid } from "nanoid";

function AddNewForm(props) {
  const { onNewNameAdded } = props;
  const [taskName, setTaskName] = useState("");

 const handleFormSubmit = (event) => {
   event.preventDefault();
   const stringTasks = localStorage.getItem("tasks");
   let tasks = JSON.parse(stringTasks);

   // if tasks is not found, set it as empty array
   if (!tasks) {
     tasks = [];
   }

   // push new item into the tasks array
   tasks.push({
     id: nanoid(),
     taskName: taskName,
   });

   // convert the tasks array into string format (JSON string)
   let convertedtasks = JSON.stringify(tasks);
   // save the updated posts into local storage
   localStorage.setItem("tasks", convertedtasks);

   // check for empty string
   if (taskName === "") {
     alert("Please enter the task");
   } else {
     // passing the name back to the parent component
     onNewNameAdded(taskName);
     // reset the state
     setTaskName("");
   }
 };
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
         onClick={handleFormSubmit}
       >
         Add
       </button>
     </form>
   </div>
 );
}

export default AddNewForm;
