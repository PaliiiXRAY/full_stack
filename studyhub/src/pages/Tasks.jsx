import { useEffect, useReducer, useState } from "react";

function Tasks() {
  const initialTasks = [
    { id: 1, title: "Finish DBMS assignment", completed: false },
    { id: 2, title: "Revise React hooks", completed: false },
    { id: 3, title: "Submit lab report", completed: true },
  ];

  function reducer(state, action) {
    switch (action.type) {
      case "SET_TASKS":
        return initialTasks;

      case "ADD_TASK":
        return [
          ...state,
          {
            id: state.length,
            title: action.payload,
            completed: false,
          },
        ];

      case "TOGGLE_TASK": {
        return state.map((e) => {
          if (e.id == action.payload) {
            e.completed = !e.completed;
          }

          return e;
        });
      }

      case "DELETE_TASK": {
        return state.filter((e) => e.id != rId);
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({ type: "SET_TASKS" });
  }, []);

  console.log(state);

  const [task, setTask] = useState("");

  function addTask() {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
    setTask("");
  }

  return (
    <div>
      <p>------------------------------------------------</p>
      <p> MY TASKS</p>
      <p>------------------------------------------------</p>

      <div>
        {" "}
        New Task:
        <input value={task} onChange={(e) => setTask(e.target.value)}></input>
        <button onClick={addTask}> [ ADD TASK ]</button>
      </div>

      <ul>
        {state.map((e) => (
          <li key={Math.random() * Math.random()}>
            {e.completed ? "[]" : "[X]"}
            {"  "} {e.title}
            <button
              onClick={() => {
                dispatch({ type: "DELETE_TASK", payload: { id: e.id } });
              }}
            >
              {" "}
              [DELETE]{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
