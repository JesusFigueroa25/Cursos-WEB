/*---Declaración---*/ 
let mySet = new Set()

/*---Inicialización---*/ 
mySet = new Set(["Neme", "Jara", "Jesus", 21, true])

/*---Add y Delete---*/ 
mySet.add("202120739")
mySet.delete("Jara")  
mySet ///{ 'Neme', 'Jesus', 21, true, 'u202120739' }

/*---Has---*/ 
console.log(mySet.has("Neme"))  ///True
console.log(mySet.has("Figue")) ///False

/*---Size---*/ 
console.log(mySet.size) /// 5

/*---Convertir un set a array---*/ 
let myArray = Array.from(mySet)

/*---Convertir un array a set---*/ 
mySet = new Set(myArray)

