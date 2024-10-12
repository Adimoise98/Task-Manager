import { useState } from "react";

function TaskForm({ addTask }) {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Low"); //low/medium/high
  const [category, setCategory] = useState("Personal"); //personal/work/others

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, priority, category };
    addTask(data);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Others">Others</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
