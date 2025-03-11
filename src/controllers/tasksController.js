require('dotenv').config();
const { Task, Priority } = require('../db');
// const { Op } = require('sequelize');
// const axios = require('axios');
// const { YOUR_API_KEY } = process.env;

const getAllTasks = async() => {
    const results = await Task.findAll({
        include: {
            model: Priority,
            attributes: ['name']                                    // Solo trae el nombre de la prioridad
        }
    });

    if(!results || results.length === 0) {                          // Si no hay tareas devuelvo un array vacío
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
        const priority = await Priority.findByPk(priorityId);       // Verificar que la prioridad exista antes de crear la tarea

        if (!priority) {
            throw new Error('La prioridad proporcionada no existe.');
        }
        
        const newTask = await Task.create({                         // Crear la tarea sin asignarle aún la prioridad
            task,
            description,
            date,
            recurring,
            completed,
            priorityId
        });
        
        const taskWithPriority = await Task.findByPk(newTask.id, {  // Recuperar la tarea con su prioridad asociada
            include: {
                model: Priority,
                attributes: ['name']                                // Solo traer el nombre de la prioridad
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
        throw new Error(error.message);                             // Retorna un error claro si algo falla
    }
};

const removeTask = async(id) => {
    const removedTask = await Task.findByPk(id);
    const deletedTask = removedTask;
    if(removedTask) {
        await removedTask.destroy();
        return deletedTask;
    }
};

const toggleTask = async(id) => {
    try {
        const task = await Task.findByPk(id);

        if(!task) {
            throw new Error('Tarea no encontrada');
        }

        task.completed = !task.completed;

        await task.save();                                          // Guardo la tarea actualizada en la DB

        return {
            id: task.id,
            task: task.task,
            description: task.description,
            date: task.date,
            recurring: task.recurring,
            completed: task.completed,
            priority: task.Priority ? task.Priority.name : null
        }
    } catch (error) {
        console.error(error);
        throw new Error(error.message); 
    }
};

module.exports = {
    getAllTasks,
    createTask,
    removeTask,
    toggleTask,
    // getDogById,
};
