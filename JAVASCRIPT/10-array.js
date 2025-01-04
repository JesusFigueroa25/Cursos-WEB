/*---Declaración---*/ 
let myArray, myArray1, myArray2, myArray3, myArray4, myArray5 = []

/*---Inicialización---*/ 
myArray = [3,1,5]          ///[ 3, 1, 5 ]
myArray1 = new Array(5)    ///[ <5 empty items> ]
myArray2 = ["Neme", "Jara", "Figue", 21, true] 
///[ 'Neme', 'Jara', 'Figue', 21, true ]

myArray4 = new Array(3)
myArray4[0] = "Nemberk"
myArray4[1] = "Jesus"
myArray4[2] = "u202120739"
myArray4 ///[ 'Nemberk', 'Jesus', 'u202120739' ]

/*---Clear---*/
myArray = [] 

/*---Push y Pop---*/
myArray5.push("Brais")
myArray5.push("Moure")
myArray5.push("mouredev")
myArray5.push(78250322)
console.log(myArray5) ///[ 'Brais', 'Moure', 'mouredev', 78250322 ]

myArray5.pop()
console.log(myArray5) ///[ 'Brais', 'Moure', 'mouredev' ]

/*---Length---*/ 
console.log(myArray5.length) /// 3

/*---Slice---*/ 
myArray = ["Brais", "Moure", "mouredev", 37, true]
console.log(myArray)  ///[ 'Brais', 'Moure', 'mouredev', 37, true ]
let NewArray = myArray.slice(1, 3)
console.log(NewArray) ///[ 'Moure', 'mouredev' ]

/*---Splice---*/ 
myArray = ["Jara", "Neme", 21, true, "Jesus",]
console.log(myArray) ///[ 'Jara', 'Neme', 21, true, 'Jesus']
myArray.splice(1, 3, "Nueva entrada")
console.log(myArray) ///[ 'Jara', 'Nueva entrada', 'Jesus' ]


