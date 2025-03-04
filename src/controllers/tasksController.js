require('dotenv').config();
const { Task/*, Temperament*/ } = require('../db');
// const { Op } = require('sequelize');
// const { cleanPropsDogs, cleanTemperaments } = require('../utils');
const axios = require('axios');
// const { YOUR_API_KEY } = process.env;

const getAllTasks = async() => {
    // const databaseDogsRaw = await Dog.findAll(
    //     {include: {                                                                                               //Para incluir los temperamentos asociados a los Dogs de la DB
    //                 model: Temperament,
    //                 attributes: ['name'],
    //                 as: 'Temperaments',
    //                 through: {
    //                     attributes: []
    //                 },
    //             }
    //     }
    // );
    // const databaseDogs = databaseDogsRaw.map((dog) => cleanTemperaments(dog));                                    //Para obtener los temperamentos organizados en un solo string(normalizados con la API)
    // const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data;
    // const apiDogs = cleanPropsDogs(apiDogsRaw);
    // const results = [...databaseDogs, ...apiDogs];
    const results = await Task.findAll();
    return results;
};

module.exports = {
    getAllTasks,
    // getDogById,
    // createDog,
    // removeDog,
    // updatedDog
};