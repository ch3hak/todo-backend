const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

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