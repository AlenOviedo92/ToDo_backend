const { getAllTasks/*, getDogById, createDog, removeDog, updatedDog*/ } = require('../controllers/prioritiesController');

const getTasksHandler = async(req, res) => {
    // const { name } = req.query;
    // try {
    //     const results = name ? await getDogByName(name) : await getAllDogs();
    //     if(results.length === 0) {
    //         res.status(200).send(`The "${name}" dog breed not exist`); 
    //     } else {
    //         res.status(200).json(results); 
    //     }
    // } catch (error) {
    //     res.status(400).json({ error: error. message });
    // }
    try {
        await getAllTasks();
    } catch (error) {
        res.status(400).json({ error: error. message });
    }
};

module.exports = {
    getTasksHandler,
    // getDogHandler,
    // createDogHandler,
    // deleteDogHandler,
    // updateDogHandler
};

//NOTA: Tratar de que el handler NO interactúe con la DB