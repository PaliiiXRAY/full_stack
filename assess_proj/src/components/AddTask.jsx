import React, { useState } from "react";

export default function AddTask({ dispatch }) {
  // Local state just for the input field
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    // TODO: 1. Create a new task object (needs id, title, completed, priority, estimatedHours)
    const task = {
      id: Date.now(),
      title: title,
      completed: false,
      priority: "High",
      estimatedHours: 5,
    };
    // TODO: 2. Dispatch the ADD_TASK action with this new object
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
    // TODO: 3. Clear the input field by resetting 'title' state to empty string
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="New task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button type="submit"></button>
    </form>
  );
}
