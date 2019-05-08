const express = require('express');
const config = require('../config');
const cors = require('cors');
const tasks = require('./routes/tasks');
const app = express();

// cors options
const corsOptions = {
  origin: config.HOST,
  optionsSuccessStatus: 200,
  credentials: true
};

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use('/tasks', tasks);

// app listening
const port = config.PORT || 8000;
app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
