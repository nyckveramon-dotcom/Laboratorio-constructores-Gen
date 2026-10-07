function Libro (titulo, stock, genero){
    this.titulo = titulo;
    this.stock = stock;
    this.genero = genero;
    this.prestado = false;

    this.prestar= function(){
        if (this.prestado === true){
            return "Alerta este libro ya está prestado"
        }

        this.prestado = true;
    }

    this.devolver = function(){
        if(this.prestado === false){
            return "Alerta este libro no está prestado"
        }

        this.prestado = false
    }
}

const libro1 = new Libro("Hábitos atómicos", 2, "Autoayuda");
const libro2 = new Libro("Encuentra tu persona vitamina", 1, "Autoayuda");
const libro3 = new Libro("Como hacer que te pasen cosas buenas", 1, "Autoayuda")

console.log(libro1.titulo, libro1.prestado);
console.log(libro2.titulo, libro2.prestado);
console.log(libro3.titulo, libro3.prestado);

