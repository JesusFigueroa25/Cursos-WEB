/*---Declaración---*/ 
let myMap = new Map()

/*---Inicialiación---*/ 
myMap = new Map([
    ["Name", "Jesus"],
    ["Email",  "jara@gmail.com"],
])

/*---Set "Agregar---"*/ 
myMap.set("Edad", 21)
myMap.set("Apelido", "Jara")

/*---Get---*/ 
console.log(myMap.get("Name")) /// Jesus
console.log(myMap.get("Edad")) /// 21

/*---Has---*/ 
console.log(myMap.has("Name")) ///True
console.log(myMap.has("Apodo")) ///False

/*---Delete---*/ 
myMap.delete("Email")

/*---Keys, Values y Entries---*/ 
console.log(myMap.keys())   ///{ 'Name', 'Edad', 'Apelido' }
console.log(myMap.values()) ///{ 'Jesus', 21,  'Jara' }
console.log(myMap.entries()) 
                            [Map Entries] {
                                [ 'Name', 'Jesus' ],
                                [ 'Edad', 21 ],
                                [ 'Apelido', 'Jara' ]
                            }
/*---Size---*/ 
console.log(myMap.size)

/*---Clear---*/ 
myMap.clear()
