const { Priority } = require('../db');

const getAllPriorities = async() => {
    const results = await Priority.findAll();
    return results;
};

const createPriority = async(name) => {
    const newPriority = await Priority.create({ name });
    return newPriority;
};

module.exports = {
    getAllPriorities,
    createPriority
};