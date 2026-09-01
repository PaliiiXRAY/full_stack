import React, {
  useState,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import TaskList from "./components/TaskList";
import Analytics from "./components/Analytics";
import taskReducer from "./state/taskReducer";
import AddTask from "./components/AddTask";

const savedTasks = localStorage.getItem("my_tasks");

export default function TaskManager() {
  // Initial State Structure
  export const initialTaskState = {
    tasks: savedTasks ? JSON.parse(savedTasks) : [],
    filter: "ALL", // 'ALL' | 'COMPLETED' | 'PENDING'
  };

  // Action Types
  export const ACTIONS = {
    ADD_TASK: "ADD_TASK",
    TOGGLE_TASK: "TOGGLE_TASK",
    DELETE_TASK: "DELETE_TASK",
    SET_FILTER: "SET_FILTER",
  };

  // 1. STATE MANAGEMENT
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const [searchTerm, setSearchTerm] = useState("");

  // TODO: Replace standard state persistence with a custom hook later
  // 2. EFFECTS
  useEffect(() => {
    localStorage.setItem("my_tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  // 3. CALLBACKS (Prevent un-needed function re-creations)
  // TODO: Wrap these with useCallback
  const handleToggle = useCallback((id) => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: id });
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: id });
  }, []);

  // 4. MEMOIZATION (Expensive filtering/sorting)
  // TODO: Wrap this calculation in useMemo
  const filteredTasks = useMemo(() => {
    return state.tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      if (state.filter === "COMPLETED") return matchesSearch && task.completed;
      if (state.filter === "PENDING") return matchesSearch && !task.completed;
      return matchesSearch;
    });
  }, [searchTerm, state]);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Task & Analytics Dashboard</h1>

      <AddTask dispatch={dispatch} />

      {/* UI Filter & Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Analytics Component */}
      <Analytics tasks={state.tasks} />

      {/* Task List Component */}
      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}
