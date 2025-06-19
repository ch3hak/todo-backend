const mongoose = require('mongoose');
const todos = require('./routes/Todo');
const users = require('./routes/Users');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/todos', todos);
app.use('/api/users', users);

mongoose.connect('mongodb://127.0.0.1:27017/todos')
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.error('couldnt connect...', err));

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});