function Estudiante(nombre, materia, nota){
    this.nombre = nombre;
    this.materia = materia;
    this.nota = nota;
    this.aprobado = this.nota >= 3.0;

    this.mostrarResultado = function(){
        return `El(la) estudiante ${this.nombre}, 
        de la materia ${this.materia}, 
        con la nota ${this.nota} se encuentra aprobado: ${this.aprobado}`;
    }

}

const estudiante1 = new Estudiante("Nycol", "Matematicas", 3.5);
const estudiante2 = new Estudiante("Vanesa", "Español", 1.5);
const estudiante3 = new Estudiante("Carlos", "Sociales", 3.8);
const estudiante4 = new Estudiante("Jean", "Ingles", 2.8);

console.log(estudiante1.mostrarResultado());
console.log(estudiante2.mostrarResultado());
console.log(estudiante3.mostrarResultado());
console.log(estudiante4.mostrarResultado());