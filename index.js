require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { SERVER_PORT } = process.env;

conn.sync({ alter: true }).then(() => {
  server.listen(SERVER_PORT, () => {
    console.log(`Server listening at port ${SERVER_PORT}`);
  });
});
