import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/layout/Header';
import About from './components/layout/About';
import NotFound from './components/layout/NotFound';
import ToDoList from './components/pages/mainpages/ToDoList';
import AddTask from './components/pages/mainpages/AddTask';
import config from './config.json';

class App extends Component {
  constructor(props) {
    super(props);
    window.toDoBackend = config.BACKEND;
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <div className="body-content container">
            <Switch>
              <Route exact path="/" component={ToDoList} />
              <Route exact path="/add/task" component={AddTask} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
