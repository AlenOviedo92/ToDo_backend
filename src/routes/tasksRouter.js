const { Router } = require('express');
const { getTasksHandler, createTaskHandler, deleteTaskHandler, toggleTaskHandler /*, getDogHandler*/ } = require('../handlers/tasksHandlers');
// const { validate } = require('../utils');

const tasksRouter = Router();

tasksRouter.get('/', getTasksHandler);

tasksRouter.post('/', /*validate,*/ createTaskHandler);          //Valido la info recibida por query antes de crear la tarea

tasksRouter.delete('/:id', deleteTaskHandler);

tasksRouter.put('/:id', toggleTaskHandler);

// dogsRouter.get('/:id', getDogHandler);

module.exports = tasksRouter;