const config = require('config');
const mongoose = require('mongoose');
const todos = require('./routes/Todo');
const users = require('./routes/Users');
const express = require('express');
const app = express();
const auth = require('./routes/Auth');

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}

app.use(express.json());
app.use('/api/todos', todos);
app.use('/api/users', users);
app.use('/api/auth', auth);

mongoose.connect('mongodb://127.0.0.1:27017/todos')
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.error('couldnt connect...', err));

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});