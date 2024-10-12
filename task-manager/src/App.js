import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [tasks, setTasks] = useState([]);

  const [filterCategory, setFilterCategory] = useState("All");

  function AddTask(task) {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  }

  useEffect(() => {
    console.log(tasks);
    console.log(filterCategory);
  }, [tasks, filterCategory]);

  const filteredTasks =
    filterCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === filterCategory);

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm addTask={AddTask} />
      <label>Category Filter</label>

      <CategoryFilter setFilterCategoryChild={setFilterCategory} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
