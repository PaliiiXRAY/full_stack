import React from "react";

// TODO: Wrap TaskItem in React.memo to prevent re-rendering all items when searchTerm changes
const TaskItem = ({ task, onToggle, onDelete }) => {
  console.log(`Rendering Task: ${task.title}`); // Useful for testing React.memo

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        margin: "8px 0",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title} ({task.priority})
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
