/*---Concatenación---*/ 
let myName = "Jesus"
let Saludo = "Hola, " + myName
console.log(Saludo) /// Hola Jesus

/*---Longitud---*/ 
console.log(Saludo.length) ///11

/*---Acceso a caracteres---*/ 
console.log(Saludo[0]) ///H
console.log(Saludo[3]) ///a

/*---Métodos comunes---*/ 
Saludo.toUpperCase()    /// HOLA, JESUS
Saludo.toLowerCase()    /// hola, jesus
Saludo.indexOf("Hola")  /// 0
Saludo.indexOf("Jesus") /// 6
Saludo.includes("Hola") /// true
Saludo.includes("Jara") /// false
Saludo.slice(1, 8)      /// ola, Je
Saludo.replace("Jesus", "Nemberk")

/*---Strings en varias líneas---*/ 
let message =
`Hola, este
es un
curso de
JavaScript`
console.log(message)

/*---Interpolación de valores---*/
let nombre = "Jara"
let email = "u202120739@gmail.com"
console.log(  "Hola",nombre,"!","Tu email es",email )