/*---Sintaxis---*/ 
let person = {
    name: "Jesus",
    age: 21,
    alias: "Neme"
}

/*---Notación punto---*/ 
console.log(person.name) ///Jesus


/*---Modificación de propiedades---*/ 
person.name = "Nemberk"
console.log(person.name) ///Nemberk


// Eliminación de propiedades
delete person.age


/*---Nueva propiedad---*/
person.email = "jara@gmail.com"
person.edad = 37

/*---Métodos (funciones)---*/ 
let person2 = {
    name: "Jara",
    age: 21,
    alias: "Neme",
    walk: function () {
        console.log("Camina.")
    }
}
person2.walk() ///Camina

/*---Anidación de objetos---*/ 
let person3 = {
  name: "Figue",
  age: 21,
  job: {
      name: "Programador",
      exp: 15,
      work: function () {
          console.log(this.exp,"años de Experiencia")
      }
  }
}
person3.name      /// Figue
person3.job.name  /// Programador
person3.job.work()/// 15 años de Experiencia.