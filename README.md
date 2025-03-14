* HERRAMIENTAS UTILIZADAS:

Node.js, Express y PostgreSQL.

* JUSTIFICACIÓN DEL STACK TECNOLÓGICO: 

Para el desarrollo del backend, se ha optado por un stack tecnológico basado en Node.js, Express y PostgreSQL, debido a su eficiencia, escalabilidad y facilidad de integración con el frontend en Angular. Node.js me permite manejar múltiples solicitudes simultáneamente sin bloquear el hilo de ejecución, lo que mejora la eficiencia y el rendimiento del servidor, además cuenta con una gran cantidad de paquetes en npm, lo que facilita la integración de herramientas y librerías adicionales. Se elige el framework Express por su facilidad de uso, modularidad y rendimiento. Se elige PostreSQL porque es un sistema de gestión de bases de datos relacional que destaca por su fiabilidad y robustez. Además se cuenta con experiencia previa en las tecnologías mencionadas anteriormente.

* MODELOS Y RELACIONES: 

Se manejan dos modelos principales, Task (Tarea) y Priority (Prioridad). Estos modelos están estructurados en una relación uno a muchos (1:N), donde:

1. Cada tarea (Task) debe estar asociada a una única prioridad (Priority).
2. Una prioridad (Priority) puede estar asociada a múltiples tareas (Tasks).
   
Esta relación se implementa mediante una clave foránea (priorityId) en el modelo Task, la cual hace referencia al identificador único (id) del modelo Priority.

* INSTRUCCIONES DE INSTALACIÓN Y EJECUCIÓN:

1. Crear una carpeta dónde se guardarán los repositorios tando del backend como del frontend, puede llamarse "ToDo". Dentro de ésta carpeta ejecutar el comando: git clone https://github.com/AlenOviedo92/ToDo_backend.git
2. Ingreso al directorio clonado: cd ToDo_backend
3. Instalo las dependencias: npm install
4. Levanto el servicio, ejecutando el comando: npm run dev

* ENDPOINTS CONFIGURADOS:

1. Crear una tarea(POST): http://localhost:3001/tasks

   JSON: ```json {
                     "task": "Hacer ejercicio",
                     "description": "Correr 10 km",
                     "date": "2025-03-25T10:00:00.000Z",
                     "recurring": "Si",
                     "completed": false,
                     "priorityId": "54e70c1c-a20a-4b19-b3bc-5e5a1e13cb75"          
                  } ```

   NOTA: El "priorityId" debe coincidir con alguno de los id asignado a las prioridades, se puede consultar con el endpoint #4.
   
3. Crear una prioridad(POST): http://localhost:3001/priorities

   JSON: {
            "name": "Alta"
         }
   
4. Obtener todas las tareas(GET):  http://localhost:3001/tasks
   
5. Obtener todas las prioridades(GET):  http://localhost:3001/priorities
   
6. Obtener una tarea por ID(GET):  http://localhost:3001/tasks/:id
   
7. Actualizar la propiedad "completed" de una tarea(PUT):  http://localhost:3001/tasks/:id
   
8. Actualizar una tarea(PUT):  http://localhost:3001/tasks/update/:id

   JSON: {
            "id": "0aa38a58-333a-4df9-ae42-dbbd94281006",                  ---> Este id debe coincidir con alguno de los id asignado a las tareas, se puede consultar con el endpoint #3.
            "task": "Montar en bicicleta",
            "date": "2025-03-26T05:00:00.000Z",
            "priorityId": "11f9277e-9e70-443c-b86e-0f48e607205a",          ---> Este id debe coincidir con alguno de los id asignado a las prioridades, se puede consultar con el endpoint #4.
            "description": "Rodar 60 km",
            "recurring": "No",
            "completed": false
         }
   
9. Eliminar una tarea(DELETE):  http://localhost:3001/tasks/:id

NOTA: Para que todos los endpoints funcionen correctamente es necesario crear, por lo menos, una prioridad utilizando el endpoint #2.




