const { getAllTasks, createTask, removeTask, restoreTask, toggleTask, updateTask, getTaskById, getDeletedTasks } = require('../controllers/tasksController');

const getTasksHandler = async(req, res) => {
    try {
        const results = await getAllTasks();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error. message });
    }
};

const createTaskHandler = async(req, res) => {
    const { task, description, date, recurring, completed, priorityId } = req.body;
    try {
        const newTask = await createTask(task, description, date, recurring, completed, priorityId);
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const deleteTaskHandler = async(req, res) => {
    const { id } = req.params;
    try {
        const taskRemoved = await removeTask(id);
        return res.status(200).json(taskRemoved);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const restoreTaskHandler = async(req, res) => {
    const { id } = req.params;
    try {
        const restoredTask = await restoreTask(id);
        return res.status(200).json(restoredTask);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const toggleTaskHandler = async(req, res) => {
    const { id } = req.params;
    try {
        const taskUpdated = await toggleTask(id);
        return res.status(200).json(taskUpdated);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const updateTaskHandler = async(req, res) => {
    const { id } = req.params;
    const updatedTask = req.body;
    try {
        const taskUpdated = await updateTask(id, updatedTask);
        return res.status(200).json(taskUpdated);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const getTaskHandler = async(req, res) => {
    const { id } = req.params;
    try {
        const task = await getTaskById(id);
        return res.status(200).json(task);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const getDeletedTasksHandler = async(req, res) => {
    try {
        const deletedTasks = await getDeletedTasks();
        return res.status(200).json(deletedTasks);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getTasksHandler,
    createTaskHandler,
    deleteTaskHandler,
    restoreTaskHandler,
    toggleTaskHandler,
    updateTaskHandler,
    getTaskHandler,
    getDeletedTasksHandler,
};
