// Este módulo tiene la responsabilidad de iniciar la App
require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { DB_PORT } = process.env;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(DB_PORT, () => {
    console.log(`%s listening at port ${DB_PORT}`); // eslint-disable-line no-console
  });
});

//NOTA: La sincronización entre el server(App de express) y la DB, debe hacerse cuando levanto el servidor