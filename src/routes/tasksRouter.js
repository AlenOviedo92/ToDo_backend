const { Router } = require('express');
const { getTasksHandler, createTaskHandler /*, getDogHandler, deleteDogHandler, updateDogHandler*/ } = require('../handlers/tasksHandlers');
// const { validate } = require('../utils');

const tasksRouter = Router();

tasksRouter.get('/', getTasksHandler);

// dogsRouter.get('/:id', getDogHandler);

tasksRouter.post('/', /*validate,*/ createTaskHandler);                                       //Valido la info recibida por query antes de crear la tarea

// dogsRouter.delete('/:id', deleteDogHandler);

// dogsRouter.put('/:id', updateDogHandler);

module.exports = tasksRouter;