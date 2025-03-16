require('dotenv').config();                                                                         
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const TaskModel = require('./models/Task');
const PriorityModel = require('./models/Priority');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT, // Asegura que estás usando el puerto correcto (5432)
  dialect: "postgres",
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true, // Activa SSL
      rejectUnauthorized: false, // Evita errores de certificado
    },
  },
});

TaskModel(sequelize);
PriorityModel(sequelize);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Task, Priority } = sequelize.models;

Priority.hasMany(Task, { 
  foreignKey: 'priorityId'
}); 

Task.belongsTo(Priority, { 
  foreignKey: 'priorityId'
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,     
};

(async () => {
  try {
    await sequelize.sync({ force: false }); // Cambia a { force: true } si quieres recrear las tablas desde cero
    console.log("✅ Tablas sincronizadas correctamente en Neon.tech.");
  } catch (error) {
    console.error("❌ Error al sincronizar las tablas:", error);
  }
})();
