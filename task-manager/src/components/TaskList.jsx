import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((taskObjParent) => (
        <TaskItem taskObjChild={taskObjParent} key={taskObjParent.id} />
      ))}
    </div>
  );
}

export default TaskList;
