use("escuelaDB");

db.alumnos.updateOne({ nombre: "Luis Martínez" }, { $set: { edad: 18 } });
db.alumnos.updateOne({ nombre: "Maria Torres" }, { $set: { grado: 4 } });

db.profesores.updateOne({ nombre: "Daniel Ortiz" }, { $set: { años: 6 } });
db.profesores.updateOne({ nombre: "Patricia Ríos" }, { $set: { materia: "Ciencias" } });

db.materias.updateOne({ nombre: "Biología" }, { $set: { creditos: 5 } });
db.materias.updateOne({ nombre: "Física" }, { $set: { creditos: 4 } });

db.grupos.updateOne({ nombre: "3C" }, { $set: { alumnos: 27 } });
db.grupos.updateOne({ nombre: "5B" }, { $set: { tutor: "Nuevo Tutor" } });


db.tareas.updateOne({ titulo: "Reporte Laboratorio" }, { $set: { fechaEntrega: "2025-01-28" } });
db.tareas.updateOne({ titulo: "Dibujo Libre" }, { $set: { materia: "Arte Digital" } });
