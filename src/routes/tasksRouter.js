const { Router } = require('express');
const { getTasksHandler, createTaskHandler, deleteTaskHandler, restoreTaskHandler, toggleTaskHandler, updateTaskHandler, getTaskHandler } = require('../handlers/tasksHandlers');

const tasksRouter = Router();

tasksRouter.get('/', getTasksHandler);

tasksRouter.post('/', createTaskHandler);

tasksRouter.delete('/:id', deleteTaskHandler);

tasksRouter.put('/restore/:id', restoreTaskHandler);

tasksRouter.put('/:id', toggleTaskHandler);

tasksRouter.put('/update/:id', updateTaskHandler);

tasksRouter.get('/:id', getTaskHandler);

module.exports = tasksRouter;