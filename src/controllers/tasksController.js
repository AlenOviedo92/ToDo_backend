require('dotenv').config();
const { Task, Priority } = require('../db');
// const { Op } = require('sequelize');
// const { cleanPropsDogs, cleanTemperaments } = require('../utils');
const axios = require('axios');
// const { YOUR_API_KEY } = process.env;

const getAllTasks = async() => {
    const results = await Task.findAll();
    return results;
};

const createTask = async (task, description, date, recurring, completed, priorityId) => {
    console.log(task);
    console.log(priorityId);
    // Verificar que la prioridad exista antes de crear la tarea
    const priority = await Priority.findByPk(priorityId);
    console.log(priority);
    if (!priority) {
        throw new Error('La prioridad proporcionada no existe.');
    }

    // Crear la tarea sin asignarle aún la prioridad
    const newTask = await Task.create({
        task,
        description,
        date,
        recurring,
        completed
    });

    // Asignar la prioridad manualmente
    await newTask.setPriority(priority);

    return newTask;
};

module.exports = {
    getAllTasks,
    createTask,
    // getDogById,
    // removeDog,
    // updatedDog
};