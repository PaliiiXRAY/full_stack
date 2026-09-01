// Initial State Structure
export const initialTaskState = {
  tasks: [
    {
      id: 1,
      title: "Learn React Hooks",
      completed: false,
      priority: "High",
      estimatedHours: 3,
    },
    {
      id: 2,
      title: "Build Project",
      completed: false,
      priority: "Medium",
      estimatedHours: 5,
    },
  ],
  filter: "ALL", // 'ALL' | 'COMPLETED' | 'PENDING'
};

// Action Types
export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  DELETE_TASK: "DELETE_TASK",
  SET_FILTER: "SET_FILTER",
};
