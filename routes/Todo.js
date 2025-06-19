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

module.exports = router;
// router.delete('/:id', (req, res) => {
//     const todo = todos.find(c => c.id === req.params.id)
//     if(!todo) return res.status(404).send('Todo with given id does not exist')

//     const deletedTodo = Todo.findByIdAndDelete(req.params.id);
// })