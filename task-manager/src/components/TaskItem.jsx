function TaskItem({ taskObjChild }) {
  return (
    <div className="task-item">
      <>
        <h3>{taskObjChild.name}</h3>
        <p>Priority: {taskObjChild.priority}</p>
        <p>Category: {taskObjChild.category}</p>

        <button>Edit</button>
        <button>Delete</button>
      </>
    </div>
  );
}

export default TaskItem;
