import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TasktoDo from './TasktoDo';
import { loadTasks } from './../../../actions/tasksCrud';
class ToDoList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.loadTasks();
  }

  render() {
    const completedTasks = [];
    const unCompletedTasks = [];
    if (this.props.tasks) {
      this.props.tasks.map(task => {
        task.completed
          ? completedTasks.push(<TasktoDo task={task} key={task._id} dashed={true} />)
          : unCompletedTasks.push( <TasktoDo task={task} key={task._id} dashed={false}/>);
      });
    }
    return (
      <div className="pt-4">
        <div className="text-center mb-3">
          <img
            src="/images/To-do_List-512.png"
            alt=""
            className="mb-3"
            style={{ height: '50px', width: 'auto' }}
          />
          <h2 className="text-center">Todo List</h2>
        </div>

        <div className="row">
          {this.props.tasks && this.props.tasks.length !== 0 ? (
            <Fragment>
              {/* {this.props.tasks.map(task => {
              return <TasktoDo task={task} key={task._id} />;
            })} */}
            {unCompletedTasks.length !== 0 ? (
              <p className="text-muted">Uncompleted tasks</p>
            ) : <p className="text-muted">Uncompleted tasks list empty!</p>}
            
              {unCompletedTasks}
              <hr className="w-100" />
              {completedTasks.length !== 0 ? (
                <p className="text-muted">Completed tasks</p>
              ) : <p className="text-muted">Completed tasks list empty!</p>}
              {completedTasks}
            </Fragment>
          ) : (
            <div className="container text-center">
              The list is empty please add your tasks
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.tasksReducer.tasks
});
export default connect(
  mapStateToProps,
  { loadTasks }
)(ToDoList);
