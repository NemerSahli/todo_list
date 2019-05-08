import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import validate from '../../../actions/validateInputs';
import InputGroup from '../../layout/InputGroup';

import { addTask } from '../../../actions/tasksCrud';

class AddTask extends Component {
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
  }

  submitAddTask = event => {
    event.preventDefault();
    this.setState({
      submited: true
    });
    const { title, description } = this.state;

    let errors = validate(title, description);

    let inputsIsValid = Object.keys(errors).every(k => !errors[k]);
    if (!inputsIsValid) return;
    let newTask = {
      title,
      description,
      userId: '2uiuisuxzhemcjh2873'
    };
    this.props.addTask(newTask, this.props.history);
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
      <div>
        <div className="pt-4 mb-5">
        <h3 className="mt-4 text-center">Add Task Todo</h3>
        </div>
        <div className="container">
          <Form onSubmit={this.submitAddTask}>
            <InputGroup
              label="Title"
              invalid={errors.title}
              max={' with max ' + 200 + ' characters'}
              inputType="text"
              name="title"
              defaultValue=""
              placeholder="Enter task title"
              onChangeHandler={this.onChangeHandler}
            />

            <InputGroup
              label="Description"
              invalid={errors.description}
              max={' with max ' + 600 + ' characters'}
              inputType="textarea"
              name="description"
              value=''
              defaultValue=""
              placeholder="Enter task description..."
              onChangeHandler={this.onChangeHandler}
            />

            <Button color="danger">
              <b>SUBMIT</b>
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(AddTask);
