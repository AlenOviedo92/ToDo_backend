const { getAllPriorities, createPriority } = require('../controllers/prioritiesController');

const getPrioritiesHandler = async(req, res) => {
    try {
        const results = await getAllPriorities();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createPriorityHandler = async(req, res) => {
    const { name } = req.body;
    try {
        const newPriority = await createPriority(name);
        return res.status(201).json(newPriority);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getPrioritiesHandler,
    createPriorityHandler,
};
