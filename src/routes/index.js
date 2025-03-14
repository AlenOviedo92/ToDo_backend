const { Router } = require('express');

const tasksRouter = require('./tasksRouter');
const prioritiesRouter = require('./prioritiesRouter');

const router = Router();

router.use('/tasks', tasksRouter);
router.use('/priorities', prioritiesRouter);

module.exports = router; 