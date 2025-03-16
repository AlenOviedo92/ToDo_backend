const { conn } = require("./src/db");

async function testConnection() {
    try {
        await conn.authenticate();
        console.log("✅ Conexión a la base de datos exitosa.");
    } catch (error) {
        console.error("❌ Error al conectar con la base de datos:", error);
    } finally {
        await conn.close();
    }
}

testConnection();
