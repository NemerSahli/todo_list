const express = require('express');
const router = express.Router();
const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/';

// to get all tasks from db
router.get('/tasks', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) return res.send({ error: err });
    const dbo = db.db('todo_list_db');

    dbo
      .collection('tasks')
      .find({})
      .sort({ date: -1 })
      .toArray((err, tasks) => {
        if (err) return res.send({ error: err });
        db.close();
        return res.status(200).send({ tasks: tasks });
      });
  });
});

// to add a new task for db
router.post('/add/task', (req, res) => {
  if (!req.body.userId || !req.body.title || !req.body.description)
    return res
      .status(400)
      .send({ err: 'userId, title and description are required!' });

  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) return res.send({ error: err });
    const dbo = db.db('todo_list_db');

    let newTask = {
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      date: new Date()
    };

    dbo.collection('tasks').insertOne(newTask, (err, task) => {
      if (err) return res.status(400).send(err);
      db.close();
      return res.status(200).send(task);
    });
  });
});

router.put('/update/task/:id', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    const dbo = db.db('todo_list_db');
    if (err) console.log(err);
    if (err) return res.send({ error: err });
    let mongoId = null;

    try {
      mongoId = new mongo.ObjectId(req.params.id);
    } catch (err) {
      if (err) return res.send({ error: err });
    }

    // assign new values to update the doc.
    let newValues = {
      $set: {
        title: req.body.title,
        description: req.body.description
      }
    };

    dbo
      .collection('tasks')
      .updateOne({ _id: mongoId }, newValues, (err, dbres) => {
        if (err) return res.send({ error: err });
        db.close();
        return res.status(200).send(dbres);
      });
  });
});

// to delete a task by Id from db
router.delete('/delete/task/:id', (req, res) => {
  if (!req.params.id)
    return res
      .status(400)
      .send({ err: 'task id is required to delete a task' });
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) return res.send({ error: err });

    const dbo = db.db('todo_list_db');
    let mongoId = null;
    try {
      mongoId = new mongo.ObjectId(req.params.id);
    } catch (err) {
      return res.send({ error: err });
    }

    dbo.collection('tasks').deleteOne({ _id: mongoId }, (err, result) => {
      if (err) return res.status(400).send(err);
      db.close();
      return res.status(200).send(result);
    });
  });
});

module.exports = router;
