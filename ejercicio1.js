function Computador(marca, procesador, ram, precio) {

    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
  
}

const compu1 = new Computador("Apple", "Intel 8", "12 gigas", 2500000);
const compu2 = new Computador("HP", "Intel core i5", "8 gigas", 3000000);
const compu3 = new Computador("Toshiba", "Intel 2", "4 gigas", 1800000);

console.log(compu1);
console.log(compu2);
console.log(compu3);


