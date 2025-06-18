// const express = require('express')
// const router = express.Router();

// router.put('/:id', (req, res) => {
//     const todo = todos.find(c => c.id === req.params.id)
//     if(!todo) return res.status(404).send('Todo with given id does not exist')
//     todo.completed=!todo.completed;
// });

// router.delete('/:id', (req, res) => {
//     const todo = todos.find(c => c.id === req.params.id)
//     if(!todo) return res.status(404).send('Todo with given id does not exist')

//     const deletedTodo = Todo.findByIdAndDelete(req.params.id);
// })
// module.exports = router;