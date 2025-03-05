const { Router } = require('express');
const { getPrioritiesHandler, createPriorityHandler } = require('../handlers/prioritiesHandlers');

const prioritiesRouter = Router();

prioritiesRouter.get('/', getPrioritiesHandler);
prioritiesRouter.post('/', createPriorityHandler);

module.exports = prioritiesRouter;