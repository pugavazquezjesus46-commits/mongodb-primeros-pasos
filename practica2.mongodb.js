use("escuelaDB");

db.alumnos.insertMany([
  { nombre: "Juan Pérez", edad: 17, grado: 5, grupo: "A" },
  { nombre: "Ana López", edad: 16, grado: 4, grupo: "B" },
  { nombre: "Luis Martínez", edad: 17, grado: 5, grupo: "A" },
  { nombre: "Maria Torres", edad: 15, grado: 3, grupo: "C" },
  { nombre: "Pedro Gómez", edad: 16, grado: 4, grupo: "B" },
  { nombre: "Sofía Rivera", edad: 15, grado: 3, grupo: "C" },
  { nombre: "Carlos Díaz", edad: 17, grado: 5, grupo: "A" },
  { nombre: "Elena Ruiz", edad: 16, grado: 4, grupo: "B" },
  { nombre: "Miguel Soto", edad: 15, grado: 3, grupo: "C" },
  { nombre: "Julia Campos", edad: 15, grado: 3, grupo: "C" }
]);

db.profesores.insertMany([
  { nombre: "Roberto García", materia: "Matemáticas", años: 10 },
  { nombre: "Laura Sosa", materia: "Español", años: 8 },
  { nombre: "Daniel Ortiz", materia: "Historia", años: 5 },
  { nombre: "Patricia Ríos", materia: "Biología", años: 12 },
  { nombre: "Oscar Luna", materia: "Geografía", años: 4 },
  { nombre: "Lucía Pineda", materia: "Física", años: 9 },
  { nombre: "Jorge Romero", materia: "Química", años: 7 },
  { nombre: "Carmen Vega", materia: "Artes", años: 6 },
  { nombre: "Diego Fuentes", materia: "Deportes", años: 3 },
  { nombre: "Rosa Campos", materia: "Inglés", años: 11 }
]);

db.materias.insertMany([
  { nombre: "Matemáticas", creditos: 5 },
  { nombre: "Español", creditos: 4 },
  { nombre: "Historia", creditos: 3 },
  { nombre: "Biología", creditos: 4 },
  { nombre: "Geografía", creditos: 3 },
  { nombre: "Física", creditos: 5 },
  { nombre: "Química", creditos: 4 },
  { nombre: "Artes", creditos: 2 },
  { nombre: "Inglés", creditos: 4 },
  { nombre: "Computación", creditos: 5 }
]);

db.grupos.insertMany([
  { nombre: "5A", tutor: "Roberto García", alumnos: 30 },
  { nombre: "4B", tutor: "Laura Sosa", alumnos: 28 },
  { nombre: "3C", tutor: "Daniel Ortiz", alumnos: 25 },
  { nombre: "5B", tutor: "Patricia Ríos", alumnos: 29 },
  { nombre: "4A", tutor: "Lucía Pineda", alumnos: 27 },
  { nombre: "3B", tutor: "Jorge Romero", alumnos: 26 },
  { nombre: "5C", tutor: "Carmen Vega", alumnos: 32 },
  { nombre: "4C", tutor: "Diego Fuentes", alumnos: 24 },
  { nombre: "3A", tutor: "Rosa Campos", alumnos: 29 },
  { nombre: "1A", tutor: "Oscar Luna", alumnos: 31 }
]);

db.tareas.insertMany([
  { titulo: "Ejercicios Álgebra", materia: "Matemáticas", fechaEntrega: "2025-01-10" },
  { titulo: "Ensayo Literatura", materia: "Español", fechaEntrega: "2025-01-12" },
  { titulo: "Mapa Conceptual Revolución", materia: "Historia", fechaEntrega: "2025-01-15" },
  { titulo: "Reporte Laboratorio", materia: "Biología", fechaEntrega: "2025-01-20" },
  { titulo: "Cuestionario Atlas", materia: "Geografía", fechaEntrega: "2025-01-22" },
  { titulo: "Problemas Movimiento", materia: "Física", fechaEntrega: "2025-01-25" },
  { titulo: "Tabla Periódica", materia: "Química", fechaEntrega: "2025-01-30" },
  { titulo: "Dibujo Libre", materia: "Artes", fechaEntrega: "2025-02-01" },
  { titulo: "Vocabulario", materia: "Inglés", fechaEntrega: "2025-02-05" },
  { titulo: "Proyecto Scratch", materia: "Computación", fechaEntrega: "2025-02-08" }
]);