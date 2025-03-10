const { Router } = require('express');
const { getTasksHandler, createTaskHandler, deleteTaskHandler /*, getDogHandler, updateDogHandler*/ } = require('../handlers/tasksHandlers');
// const { validate } = require('../utils');

const tasksRouter = Router();

tasksRouter.get('/', getTasksHandler);

tasksRouter.post('/', /*validate,*/ createTaskHandler);          //Valido la info recibida por query antes de crear la tarea

tasksRouter.delete('/:id', deleteTaskHandler);

// dogsRouter.get('/:id', getDogHandler);

// dogsRouter.put('/:id', updateDogHandler);

module.exports = tasksRouter;