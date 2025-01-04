// Importación de módulos
import { Suma, PI, name, Circle } from "./28-export-modules.js"
import defaultImport from "./28-export-modules.js"

// Funciones
console.log(Suma(5, 10)) ///15

// Propiedades
console.log(PI)   ///3.1416
console.log(name) ///MoureDev

// Clases
let circle = new Circle(10)
console.log(circle.radius)                 /// 10
console.log(circle.area().toFixed(2))      /// 314.16
console.log(circle.perimeter().toFixed(2)) /// 62.83

// Importación por defecto 
console.log(defaultImport(5, 10))          /// -5

