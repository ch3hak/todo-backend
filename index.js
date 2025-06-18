const mongoose = require('mongoose');
// const todos = require('./routes/Todo')
const express = require('express');
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/todos')
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.error('couldnt connect...', err));

const todoSchema = new mongoose.Schema({
    title: String,
    completed: {type: Boolean, default: false}
});

const Todo = mongoose.model('Todo', todoSchema)

async function createTodo(){
    const todo = new Todo({
        title: 'do leetcode'
    });
    
    const result = await todo.save();
    console.log(result);
}

createTodo();

// app.use('/api/todos', todos)
