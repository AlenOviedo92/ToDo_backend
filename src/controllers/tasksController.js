require('dotenv').config();
const { Task, Priority } = require('../db');
// const { Op } = require('sequelize');
// const { cleanPropsDogs, cleanTemperaments } = require('../utils');
const axios = require('axios');
// const { YOUR_API_KEY } = process.env;

const getAllTasks = async() => {
    const results = await Task.findAll({
        include: {
            model: Priority,
            attributes: ['name'] // Solo traer el nombre de la prioridad
        }
    });
    // Si no hay tareas devuelvo un array vacío
    if(!results || results.length === 0) {
        return [];
    }

    return results.map(task => ({
        id: task.id,
        task: task.task,
        description: task.description,
        date: task.date,
        recurring: task.recurring,
        completed: task.completed,
        priority: task.Priority ? task.Priority.name : null,
    }));
};

const createTask = async (task, description, date, recurring, completed, priorityId) => {
    try {
        // Verificar que la prioridad exista antes de crear la tarea
        const priority = await Priority.findByPk(priorityId);

        if (!priority) {
            throw new Error('La prioridad proporcionada no existe.');
        }
        // Crear la tarea sin asignarle aún la prioridad
        const newTask = await Task.create({
            task,
            description,
            date,
            recurring,
            completed,
            priorityId
        });
        // Recuperar la tarea con su prioridad asociada
        const taskWithPriority = await Task.findByPk(newTask.id, {
            include: {
                model: Priority,
                attributes: ['name'] // Solo traer el nombre de la prioridad
            }
        });
    
        return {
            id: taskWithPriority.id,
            task: taskWithPriority.task,
            description: taskWithPriority.description,
            date: taskWithPriority.date,
            recurring: taskWithPriority.recurring,
            completed: taskWithPriority.completed,
            priority: taskWithPriority.Priority ? taskWithPriority.Priority.name : null,
        };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);  // Retorna un error claro si algo falla
    }
};

module.exports = {
    getAllTasks,
    createTask,
    // getDogById,
    // removeDog,
    // updatedDog
};