const { Router } = require('express');
const { getPrioritiesHandler } = require('../handlers/prioritiesHandlers');

const prioritiesRouter = Router();

prioritiesRouter.get('/', getPrioritiesHandler);

module.exports = prioritiesRouter;