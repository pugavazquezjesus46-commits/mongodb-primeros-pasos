use("escuelaDB");

db.alumnos.deleteOne({ nombre: "Juan Pérez" });
db.alumnos.deleteOne({ nombre: "Ana López" });

db.profesores.deleteOne({ nombre: "Roberto García" });
db.profesores.deleteOne({ nombre: "Laura Sosa" });

db.materias.deleteOne({ nombre: "Matemáticas" });
db.materias.deleteOne({ nombre: "Historia" });

db.grupos.deleteOne({ nombre: "5A" });
db.grupos.deleteOne({ nombre: "4B" });

db.tareas.deleteOne({ titulo: "Ejercicios Álgebra" });
db.tareas.deleteOne({ titulo: "Ensayo Literatura" });
