import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import validate from '../../../actions/validateInputs';
import InputGroup from '../../layout/InputGroup';

import { updateTask } from '../../../actions/tasksCrud';

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      submited: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.setState({
      title: this.props.task.title,
      description: this.props.task.description
    });

    document.getElementById('textarea').value = this.props.task.description;
  }

  submitUpdateTask = async event => {
    event.preventDefault();
    this.setState({
      submited: true
    });
    const { title, description } = this.state;
    let errors = validate(title, description);
    let inputsIsValid = Object.keys(errors).every(k => !errors[k]);

    if (!inputsIsValid) return;
    let newTask = {
      _id: this.props.task._id,
      title: title,
      description: description,
      userId: this.props.task.userId,
      completed: this.props.task.completed,
      date: this.props.task.date
    };

    await this.props.updateTask(this.props.task._id, newTask);
    this.props.toggleDisplayUpdateTask();
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { title, description } = this.state;
    const errors = this.state.submited && validate(title, description);
    return (
      <div className="update-container">
        <Form onSubmit={this.submitUpdateTask}>
          <InputGroup
            label="Title"
            invalid={errors.title}
            max={' with max ' + 200 + ' characters'}
            inputType="text"
            name="title"
            defaultValue={title}
            placeholder="Enter task title"
            onChangeHandler={this.onChangeHandler}
          />

          <InputGroup
            id="textarea"
            label="Description"
            invalid={errors.description}
            max={' with max ' + 600 + ' characters'}
            inputType="textarea"
            name="description"
            defaultValue={description}
            placeholder="Enter task description..."
            onChangeHandler={this.onChangeHandler}
          />

          <Button color="danger">
            <b>Update</b>
          </Button>
        </Form>
        <Button
          color="danger"
          onClick={this.props.toggleDisplayUpdateTask}
          className="cancel-update"
        >
          Cancel
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.tasksReducer.tasks
});

export default connect(
  mapStateToProps,
  { updateTask }
)(UpdateTask);
