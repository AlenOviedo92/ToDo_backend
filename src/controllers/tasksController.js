require('dotenv').config();
const { Task, Priority } = require('../db');
// const { YOUR_API_KEY } = process.env;

const getAllTasks = async() => {
    const results = await Task.findAll({
        where: { deleted: false },
        include: {
            model: Priority,
            attributes: ['name']                                    
        }
    });

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
        const priority = await Priority.findByPk(priorityId);       

        if (!priority) {
            throw new Error('La prioridad proporcionada no existe.');
        }
        
        const newTask = await Task.create({                         
            task,
            description,
            date,
            recurring,
            completed,
            priorityId
        });
        
        const taskWithPriority = await Task.findByPk(newTask.id, {  
            include: {
                model: Priority,
                attributes: ['name']                                
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
        throw new Error(error.message);                             
    }
};

const removeTask = async(id) => {
    const task = await Task.findByPk(id);
    if (!task) throw new Error('Tarea no encontrada');

    task.deleted = true;
    await task.save();

    return task;
};

const restoreTask = async(id) => {
    const task = await Task.findByPk(id);
    if (!task) throw new Error('Tarea no encontrada');

    if (!task.deleted) throw new Error('La tarea no está eliminada');

    task.deleted = false;
    await task.save();

    return task;
};

const toggleTask = async(id) => {
    try {
        const task = await Task.findByPk(id);

        if(!task) {
            throw new Error('Tarea no encontrada');
        }

        task.completed = !task.completed;
        await task.save();                                         

        const updatedTask = await Task.findByPk(id, {
            include: {
                model: Priority,
                attributes: ['name']
            }
        });

        return {
            id: updatedTask.id,
            task: updatedTask.task,
            description: updatedTask.description,
            date: updatedTask.date,
            recurring: updatedTask.recurring,
            completed: updatedTask.completed,
            priority: updatedTask.Priority ? updatedTask.Priority.name : null
        }
    } catch (error) {
        console.error(error);
        throw new Error(error.message); 
    }
};

const updateTask = async(id, updatedTask) => {
    try {
        const task = await Task.findByPk(id);

        if(!task) {
            throw new Error('Tarea no encontrada');
        }

        await task.update(updatedTask);         

        const editedTask = await Task.findByPk(id, {
            include: {
                model: Priority,
                attributes: ['name']
            }
        });

        return {
            id: editedTask.id,
            task: editedTask.task,
            description: editedTask.description,
            date: editedTask.date,
            recurring: editedTask.recurring,
            completed: editedTask.completed,
            priority: editedTask.Priority ? editedTask.Priority.name : null
        };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

const getTaskById = async(id) => {
    try {
        const task = await Task.findByPk(id, {
            include: {
                model: Priority,
                attributes: ['name', 'id']
            }
        });

        if(!task) {
            throw new Error('Tarea no encontrada');
        }

        return {
            id: task.id,
            task: task.task,
            description: task.description,
            date: task.date,
            recurring: task.recurring,
            completed: task.completed,
            priorityId: task.Priority ? task.Priority.id : null
        };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

const getDeletedTasks = async() => {
    const results = await Task.findAll({
        where: { deleted: true },
        include: {
            model: Priority,
            attributes: ['name']
        }
    });
    
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

module.exports = {
    getAllTasks,
    createTask,
    removeTask,
    restoreTask,
    toggleTask,
    updateTask,
    getTaskById,
    getDeletedTasks,
};
