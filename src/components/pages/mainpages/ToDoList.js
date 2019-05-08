import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasktoDo from './TasktoDo';
import { loadTasks } from './../../../actions/tasksCrud';
class ToDoList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.loadTasks();
  }

  render() {
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
            this.props.tasks.map(task => {
              return <TasktoDo task={task} key={task._id} />;
            })
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
