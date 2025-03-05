const { getAllTasks, createTask/*, getDogById, removeDog, updatedDog*/ } = require('../controllers/tasksController');

const getTasksHandler = async(req, res) => {
    try {
        const results = await getAllTasks();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error. message });
    }
};

const createTaskHandler = async(req, res) => {
    const { task, description, date, recurring, completed, priority } = req.body;
    try {
        const newTask = await createTask(task, description, date, recurring, completed, priority);
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getTasksHandler,
    createTaskHandler,
};

//NOTA: Tratar de que el handler NO interactúe con la DB