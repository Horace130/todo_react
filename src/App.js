import { nanoid } from "nanoid";
import AddNewForm from "./components/addnew";
import TasksList from "./components/list";

function App() {
  const stringTasks = localStorage.getItem("Tasks");

  let list = JSON.parse(stringTasks);

  // if Tasks is not found in the localstorage, set empty array
  if (!list) {
    list = [];
  }

  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-4"
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3 ">My Todo List</h3>
          <div className=" ">
            <TasksList
              list={list}
              onItemDelete={(item_id) => {
                // 1. remove the selected post from posts based on the post_id
                let filteredItems = list.filter((item) => item.id !== item_id);
                // 2. update the data back to the local storage using thelocalStorage.setItem()
                let convertedItems = JSON.stringify(filteredItems);
                localStorage.setItem("items", convertedItems);
              }}
              onTaskComplete={(id) => {
                const newList = list.map((task) =>
                  task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
                );
                //  setList(newList);
              }}
            />
          </div>
          <AddNewForm
            onNewNameAdded={(taskName) => {
              // clone the existing state
              const newList = [...list];
              // push the new item into the newList
              newList.push({
                id: nanoid(), // generate id
                // id: newList.length + 1,
                name: taskName,
              });
              // update the newList with the setState function
              //  setList(newList);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
