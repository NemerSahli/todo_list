import React from 'react';
export default function About() {
  window.scrollTo(0, 0);

  return (
    <div className="pt-5">
      <h3 className="text-center mb-3">Code challenge</h3>
      <h5>Technical Requirements:</h5>

      <ul>
        <li> Linux/Unix or osx</li>
        <li> Npm 5.xx</li>
        <li> Nodejs 8.xx or higher</li>
        <li> JavaScript ES6 or higher</li>
        <li> React</li>
        <li> Create react app package</li>
        <li> Mongodb 3.xx native nodejs driver</li>
        <li> Mocha/jest/Ava or your favorite test runner</li>
      </ul>

      <p>
        No frameworks like Koa or Meteor should be used to solve this challenge,
        For this challenge there’s no specific timebox to finish it
      </p>

      <p>
        This challenge’s purpose is to showcase your knowledge and skills in
        javascript and how you can use it to build and test a web service, which
        can be used by a react web app to allow a user to read and write
        information based on the data model you will be composing in the data
        layer of the webservice.
      </p>

      <p>
        You can start the challenge using code that you already wrote before to
        help you bootstrap a basic nodejs server utilizing native mongodb driver
        for nodejs, and use npm package create-react-app to bootstrap the
        frontend of the webapp.
      </p>

      <h6>
        1- Start by writing code to bootstrap all the basic requirements to run
        an http server
      </h6>

      <h6>
        2- Create a mongodb adapter service which creates a database connection
        with mongodb
      </h6>

      <p>
        The challenge permise is to create a list of todos, where a user can add
        or edit an action item
      </p>

      <p>
        A user can use this service to add and edit todo items, to help them
        keep track of a simple task list with actionable items in the following
        structure
      </p>
      <ul>
        <li> Title text field, less than 200 characters</li>
        <li> Description text field less than 600 characters</li>
        <li>
          This is only a demo of how such a service can be implemented and used
          from any browser client, without the need to specify a particular
          authenticated or authorized user to add and remove todo items, so
          assume this service is for one user only
        </li>
      </ul>
      <p>
        Proceed by creating the required mongodb service to create, read and
        update todo items, router endpoints to perform these CRUD operations for
        a list of todos, using standard RESTful http{' '}
      </p>
      <p>Add/edit todo items title and description</p>
      <p>
        Listing and sorting of all of the above based on a created at timesamp
        properties for todo items or action items related to it
      </p>

      <ul>
        <li>
          Bonus point for sorting without using a createdAt property for todo
          items or action items
        </li>
        <li> Bonus point for writing test</li>
        <li>
          Implement User interface to work well in any modern browser, please
          provide a good user experience to use the functions above, with
          respect to requirements and showing details like timestamps, and
          changes done to action items, if anyone can use this service, its a
          good user experience{' '}
        </li>
      </ul>

      <p>Wish you good luck, a useful learning experience, and happy hacking</p>
    </div>
  );
}
