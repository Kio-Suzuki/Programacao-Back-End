const express = require('express');
const router = express.Router();
const TaskController = require('../controller/taskController');

router.post('/task', TaskController.createTask);
router.get('/task', TaskController.getTasks);
router.get('/task/:id', TaskController.getTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;
