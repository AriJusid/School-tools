import { Estudiantes } from "./lib/estudiantes.js";

const estud = new Estudiantes();
estud.cargarEstudiantesDesdeJson();
console.log("buscando estudianets")
const resultados = estud.listarEstudiantes()
console.log(resultados)