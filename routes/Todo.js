const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/getAll', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    }
    catch (err) {
        console.error('Error fetching todos:', err);
        res.status(500).json({error: err.message});
    }
})

router.put('/:id/toggle', async (req, res) => {
    try{ 
        const todo = await Todo.findById(req.params.id);
        if(!todo) return res.status(404).send('Todo with given id does not exist')
        
        todo.completed=!todo.completed;
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.post('/new', async (req, res) => {
    try{
        const newTodo = new Todo({
            title: req.body.title
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    }
    catch (err) { 
        res.json({error: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo) return res.status(404).send('Todo with given id does not exist')

        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
})

module.exports = router;