const { getAllTasks, createTask, removeTask/*, getDogById, updatedDog*/ } = require('../controllers/tasksController');

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

module.exports = {
    getTasksHandler,
    createTaskHandler,
    deleteTaskHandler,
};

//NOTA: Tratar de que el handler NO interactúe con la DB