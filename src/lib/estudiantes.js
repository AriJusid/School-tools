import { readFileSync, writeFileSync } from 'fs';

const DATA_FILE = './data/alumnos.json';

class Estudiantes {
  constructor() {
    this.estudiantes = [];
    this.cargarEstudiantesDesdeJson();
  }
  
  cargarEstudiantesDesdeJson() {
    try {
      const data = JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
      this.estudiantes = data.alumnos || [];
    } catch (e) {
      console.error("Error al leer el archivo de datos:", e);
      this.estudiantes = [];
    }
  }

  guardarEstudiantes() {
    try {
      writeFileSync(DATA_FILE, JSON.stringify({ alumnos: this.estudiantes }, null, 2));
      // No es necesario recargar después de guardar
    } catch (e) {
      console.error("Error al guardar los estudiantes:", e);
      throw new Error("No se pudo guardar la lista de estudiantes.");
    }
  }

  agregarEstudiante(nombre, apellido, curso) {
    this.estudiantes.push({ nombre, apellido, curso });
    this.guardarEstudiantes();
  }

  buscarEstudiantePorNombre(nombre) {
    return this.estudiantes.filter(est => est.nombre.toLowerCase() === nombre.toLowerCase());
  }

  buscarEstudiantePorApellido(apellido) {
    return this.estudiantes.filter(est => est.apellido.toLowerCase() === apellido.toLowerCase());
  }

  listarEstudiantes() {
    return this.estudiantes;
  }
}

export { Estudiantes };