const { Router } = require('express');
const { getTasksHandler /*, getDogHandler, createDogHandler, deleteDogHandler, updateDogHandler*/ } = require('../handlers/tasksHandlers');
// const { validate } = require('../utils');

const tasksRouter = Router();

tasksRouter.get('/', getTasksHandler);

// dogsRouter.get('/:id', getDogHandler);

// dogsRouter.post('/', validate, createDogHandler);                                       //Valido la info recibida por query antes de crear la reaza de perros

// dogsRouter.delete('/:id', deleteDogHandler);

// dogsRouter.put('/:id', updateDogHandler);

module.exports = tasksRouter;