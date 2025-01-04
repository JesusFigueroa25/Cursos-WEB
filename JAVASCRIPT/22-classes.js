// Clases
class Profesor {
    #password //privada
    constructor(name, age, curso, password) {
        this.name = name
        this.age = age
        this.curso = curso
        this.#password = password
    }
    Universidad() {
        console.log("UPC")
    }
    get password() {
        return this.#password
    }
    set password(password) {
        this.#password = password
    }
}

// Instancia
let profesor2 = new Profesor("Bruno", 37, "Finanzas", "finaupc");
profesor2.Universidad()  /// UPC
console.log(profesor2.password)   // Getters 
profesor2.password = "brunito123" // Setters

// Acceso a propiedades
console.log(profesor1.name)  /// Jara
profesor1.curso = "Etica" 
console.log(profesor1.curso) /// Etica

// Herencia
class Animal {
    constructor(name) {
        this.name = name
    }
    sound() {
        console.log("El animal emite un sonido genérico")
    }
}
class Fish extends Animal {
    constructor(name, size) {
        super(name)
        this.size = size
    }
    swim() {
        console.log("El pez nada")
    }
}
let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos
class FuncionSuma {
    static sum(a, b) {
        return a + b
    }
}
console.log(FuncionSuma.sum(5, 10)) /// 15