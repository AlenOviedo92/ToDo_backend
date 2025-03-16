const { Router } = require('express');

const tasksRouter = require('./tasksRouter');
const prioritiesRouter = require('./prioritiesRouter');

const router = Router();

router.get('/', (req, res) => {
    res.send('Backend funcionando OK 🚀');
});
router.use('/tasks', tasksRouter);
router.use('/priorities', prioritiesRouter);

module.exports = router; 