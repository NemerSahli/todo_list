import axios from 'axios';

export const loadTasks = () => dispatch => {
  axios({
    method: 'GET',
    url: window.toDoBackend + '/tasks/tasks'
  })
    .then(response => {
      if (response.data.tasks.length)
        dispatch({ type: 'LOAD_TASKS', payload: response.data.tasks });
    })
    .catch(error => {
      console.log(error);
    });
};

export const addTask = (newTask, routeTo) => dispatch => {
  axios({
    method: 'POST',
    url: window.toDoBackend + '/tasks/add/task/',
    data: newTask
  })
    .then(response => {
      console.log(response.data.n);
      if (response.data.n === 1)
        dispatch({ type: 'ADD_TASKS', payload: response.data });
      routeTo.push('/');
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteTask = taskId => dispatch => {
  axios({
    method: 'DELETE',
    url: window.toDoBackend + '/tasks/delete/task/' + taskId
  })
    .then(response => {
      if (response.data.n === 1)
        dispatch({ type: 'DELETE_TASK', payload: taskId });
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateTask = (taskId, newData) => dispatch => {
  axios({
    method: 'PUT',
    url: window.toDoBackend + '/tasks/update/task/' + taskId,
    data: newData
  })
    .then(response => {
      console.log(response.data);
      if (response.data.nModified === 1)
        dispatch({ type: 'UPDATE_TASK', payload: newData, taskId: taskId });
    })
    .catch(error => {
      console.log(error);
    });
};
