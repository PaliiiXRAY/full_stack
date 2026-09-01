function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const arr = [...state.tasks, action.payload];
      return {
        ...state,
        tasks: arr,
      };

    case "TOGGLE_TASK": {
      const arr = state.tasks.map((element) => {
        if (element.id == action.payload.id) {
          return { ...element, completed: !element.completed };
        } else return element;
      });

      return {
        ...state,
        tasks: arr,
      };
    }

    case "DELETE_TASK": {
      const newArray = state.tasks.filter((e) => e.id != action.payload.id);

      return {
        ...state,
        tasks: newArray,
      };
    }

    default:
      return state;
  }
}

export default taskReducer;
