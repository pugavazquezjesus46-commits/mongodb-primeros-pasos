use("escuelaDB");

db.alumnos.find(); 
db.alumnos.find({ edad: { $gt: 16 } });
db.alumnos.find({ grupo: "A" });
db.alumnos.find({ grado: 3 });
db.alumnos.find({ nombre: /a/i });
db.alumnos.find({ edad: { $lt: 16 } });
db.alumnos.find({ grado: { $gte: 4 } });
db.alumnos.find({ grupo: { $in: ["A", "B"] } });
db.alumnos.find({}, { nombre: 1, edad: 1 });
db.alumnos.find().sort({ edad: -1 });

db.profesores.find();
db.profesores.find({ años: { $gt: 8 } });
db.profesores.find({ materia: "Biología" });
db.profesores.find({ nombre: /o/i });
db.profesores.find({ años: { $lte: 5 } });
db.profesores.find({}, { nombre: 1, materia: 1 });
db.profesores.find().sort({ años: 1 });
db.profesores.find({ materia: { $in: ["Física", "Química"] } });
db.profesores.find({ años: { $gte: 10 } });
db.profesores.find({ materia: /a$/i });


db.materias.find();
db.materias.find({ creditos: 5 });
db.materias.find({ creditos: { $gte: 4 } });
db.materias.find({ nombre: /a/i });
db.materias.find({ nombre: "Inglés" });
db.materias.find({ creditos: { $lt: 4 } });
db.materias.find({}, { nombre: 1 });
db.materias.find().sort({ creditos: -1 });
db.materias.find({ nombre: { $in: ["Biología", "Física"] } });
db.materias.find({ nombre: /^C/ });


db.grupos.find();
db.grupos.find({ alumnos: { $gt: 28 } });
db.grupos.find({ tutor: "Daniel Ortiz" });
db.grupos.find({ nombre: /A$/ });
db.grupos.find({ alumnos: { $lt: 27 } });
db.grupos.find({}, { nombre: 1, tutor: 1 });
db.grupos.find().sort({ alumnos: 1 });
db.grupos.find({ alumnos: { $gte: 30 } });
db.grupos.find({ tutor: /a/i });
db.grupos.find({ nombre: /^3/ });


db.tareas.find();
db.tareas.find({ materia: "Biología" });
db.tareas.find({ fechaEntrega: { $gte: "2025-01-20" } });
db.tareas.find({ titulo: /a/i });
db.tareas.find({ fechaEntrega: /2025-02/ });
db.tareas.find({}, { titulo: 1 });
db.tareas.find().sort({ fechaEntrega: 1 });
db.tareas.find({ materia: { $in: ["Matemáticas", "Física"] } });
db.tareas.find({ titulo: /^P/ });
db.tareas.find({ fechaEntrega: { $lt: "2025-01-20" } });
