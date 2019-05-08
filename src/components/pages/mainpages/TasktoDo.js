import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import UpdateTask from './UpdateTask';
import { deleteTask } from './../../../actions/tasksCrud';
import { connect } from 'react-redux';

class TasktoDo extends Component {
  state = {
    displayDescription: false,
    displayUpdateTask: false,
    checked: false
  };
  onShowClick = () => {
    if (!this.state.displayUpdateTask)
      this.setState({
        displayDescription: !this.state.displayDescription
      });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  toggleDisplayUpdateTask = () => {
    this.setState({
      displayDescription: false,
      displayUpdateTask: !this.state.displayUpdateTask
    });
  };

  render() {
    const { task } = this.props;
    var options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    let date = new Date(task.date);
    let hh = date.getHours();
    let mm = date.getMinutes();
    mm = mm < 10 ? (mm = '0' + mm) : mm;
    date = date.toLocaleDateString('en-US', options);
    date = date + ', ' + hh + ':' + mm;
    return (
      <div className="col-12 card card-body mb-1 pl-4 pr-4 pt-2 pb-0 task">
        <div className="row justify-content-between">
          <div className="row">
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange('checked')}
              value="checked"
            />
            <h5 className="mt-2">
              {task.title}
              <i
                onClick={this.onShowClick}
                className={
                  this.state.displayDescription
                    ? 'ml-2 fas fa-sort-up cursor-pointer text-muted'
                    : 'ml-2 fas fa-sort-down cursor-pointer text-muted'
                }
              />
            </h5>
          </div>

          <div className="row mr-1">
            <p className=" mt-2 ml-3 mr-3 text-muted">{date}</p>
            <button
              onClick={this.toggleDisplayUpdateTask}
              className=" task-ctrl h6  mr-3 text-muted"
            >
              <i className="fas fa-edit" />
            </button>

            <button
              onClick={this.props.deleteTask.bind(this, task._id)}
              className="task-ctrl h6 text-danger"
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </div>

        {this.state.displayUpdateTask ? (
          <UpdateTask
            task={this.props.task}
            toggleDisplayUpdateTask={this.toggleDisplayUpdateTask}
          />
        ) : null}

        {this.state.displayDescription && !this.state.displayUpdateTask ? (
          <ul className="list-group mb-2">
            <li className="list-group-item">
              <b>Description:</b> {this.props.task.description}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteTask }
)(TasktoDo);
