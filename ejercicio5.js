const prompt =require("prompt-sync")();

function Vehiculo(marca, modelo, anio, color, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color
    this.precio = precio

    this.cambiarColor = function(nuevoColor){
        this.color = nuevoColor;
    }

    this.mostrarInformacion = function(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, 
        Año: ${this.anio}, Color: ${this.color}, Precio: ${this.precio}`;
    }

    this.aumentarPrecio = function(valor){
        this.precio = this.precio + valor;
    }
}

function crearVehiculo(){
    const marca = prompt("Ingresa la marca del vehículo: ");
    const modelo = prompt ("Ingrese el modelo: ");
    const anio = prompt("Ingrese el año de fabricación: ");
    const color = prompt("Ingrese el color del vehículo: ");
    const precio = prompt("Ingrese el precio del vehículo: ")

    return new Vehiculo(marca, modelo, anio, color, precio)
}

const vehiculo1 = crearVehiculo();
const vehiculo2 = crearVehiculo();
const vehiculo3 = crearVehiculo();