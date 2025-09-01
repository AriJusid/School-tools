import { Estudiantes } from "./lib/estudiantes.js";
console.log("buscando estudianets")

const estud = new Estudiantes();
estud.cargarEstudiantesDesdeJson();
console.log("buscando estudianets")
const resultados = estud.agregarEstudiante("ari", "jusid", "5ID")
console.log(estud.listarEstudiantes())