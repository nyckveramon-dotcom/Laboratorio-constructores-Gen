function Mascota(nombre, especie, edad, peso){

    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function() {
        return `Hola mi nombre es ${this.nombre}, soy un ${this.especie}, tengo ${this.edad} años y peso ${this.peso} kilos`;
    }

}

const mascota1 = new Mascota("Happy", "gato", 10, 8);
const mascota2 = new Mascota("Candy", "perro", 5, 10);
const mascota3 = new Mascota("Haru", "gato", 2, 5);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());