require('dotenv').config();
const { Task/*, Temperament*/ } = require('../db');
// const { Op } = require('sequelize');
// const { cleanPropsDogs, cleanTemperaments } = require('../utils');
const axios = require('axios');
// const { YOUR_API_KEY } = process.env;

const getAllTasks = async() => {
    const results = await Task.findAll();
    return results;
};

const createTask = async(task, description, date, recurring, completed, priorityId) => {
    const newTask = await Task.create({ task, description, date, recurring, completed, priorityId });
    return newTask;
};

module.exports = {
    getAllTasks,
    createTask,
    // getDogById,
    // removeDog,
    // updatedDog
};