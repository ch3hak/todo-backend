const mongoose = require('mongoose');
const todos = require('./routes/Todo')
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/todos', todos);

mongoose.connect('mongodb://127.0.0.1:27017/todos')
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.error('couldnt connect...', err));

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

// async function createTodo(){
//     const todo = new Todo({
//         title: 'do leetcode'
//     });
    
//     const result = await todo.save();
//     console.log(result);
// }

// createTodo();

// async function updateTodo(id){
//     const result = await Todo.findByIdAndUpdate({_id: id}, {
//         $set: {
//             completed: true
//         }
//     });
//     console.log(result);
// }

// updateTodo('68530ed67d71fff36d762794');