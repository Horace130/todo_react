import { useState } from "react";
import { nanoid } from "nanoid";
import AddNewForm from "./components/addnew";
import TasksList from "./components/list";

function App() {
    const [list, setList ] = useState([]);
    console.log(list)
    return (
        <div className="container">
        <div
          className="card rounded shadow-sm mx-auto my-4"
          style={{
            maxWidth: "500px"
          }}
        >
        <div className="card-body">
          <h3 className="card-title mb-3 ">My Todo List</h3>
          <div className=" ">
            <TasksList
            list={list}
        onTaskDelete={(id) => {
          // filter OUT the student with the given id
          const newList = list.filter((s) => s.id !== id);
          // update the newList with the setState function
          setList(newList);
        }}
        onTaskComplete={(id) => {
          const newList = list.map((task) =>
            task.id === id
              ? { ...task, completed: !task.completed } 
              : task
          );
       
          setList(newList);
        }}/>
          </div>
          <AddNewForm onNewNameAdded={(taskName) => {
              // clone the existing state
              const newList = [...list];
              // push the new item into the newList
              newList.push({
                id: nanoid(), // generate id
                // id: newList.length + 1,
                name: taskName,
              });
              // update the newList with the setState function
              setList(newList);
            }} />
        </div>
      </div>
    </div>

       
      
    );
  }
  
  export default App;
  