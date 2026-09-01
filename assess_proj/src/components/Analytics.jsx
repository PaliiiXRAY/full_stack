import React, { useMemo } from "react";

export default function Analytics({ tasks }) {
  // TODO: Wrap heavy calculations in useMemo
  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    totalHours: tasks.reduce((acc, t) => acc + t.estimatedHours, 0),
  };

  return (
    <div style={{ background: "#f0f0f0", padding: "10px", margin: "15px 0" }}>
      <h3>Analytics</h3>
      <p>Total Tasks: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Total Estimated Time: {stats.totalHours} hrs</p>
    </div>
  );
}
