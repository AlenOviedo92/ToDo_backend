const { getAllPriorities } = require('../controllers/prioritiesController');

const getPrioritiesHandler = async(req, res) => {
    try {
        const results = await getAllPriorities();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getPrioritiesHandler
};

//NOTA: Tratar de que el handler NO interactúe con la DB