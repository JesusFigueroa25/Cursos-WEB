/*---Simple---*/ 
function myFunc() {
    console.log("¡Hola, función!")
}

/*---Parámetros---*/ 
function sum(a, b, name) {
    console.log(a + b) ///15
    console.log(name)  ///Suma
}
sum(5, 10, "Suma") 

//Por defecto
function defaultSum(a = 0, b = 0) {
    console.log(a + b) ///15
}
defaultSum(5, 10) 

/*---Retorno de valores---*/ 
function mult(a, b) {
    return a * b  
}
let result = mult(5, 10) 
console.log(result)  ///50
