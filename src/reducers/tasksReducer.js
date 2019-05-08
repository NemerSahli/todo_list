const intialState = {
  tasks: null
};

export default function(state = intialState, action) {
  switch (action.type) {
    case 'LOAD_TASKS':
      if(action.payload.length)
      return {
        ...state,
        tasks: action.payload
      };
    case 'DELETE_TASK':
      let newTasks = state.tasks.filter(task => task._id !== action.payload);
      return {
        ...state,
        tasks: newTasks
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.taskId ? (task = action.payload) : task
        )
      };

    default:
      return state;
  }
}
