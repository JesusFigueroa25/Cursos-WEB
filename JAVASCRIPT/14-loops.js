/*-----For-----*/ 
for (let i = 0; i < 5; i++) {
    console.log("Hola ",i)
}

/*-----While-----*/ 
let i = 0
while (i < 5) {
    console.log("Bye ",i)
    i++
}

/*-----Do while-----*/ 
i = 6
do {
    console.log("Hi ",i)
    i++
} while (i < 5)

/*-----For of-----*/ 
let myString = "¡Hola, JavaScript!"
for (let value of myString) {
    console.log(value)
}

let myArray = [1, 2, 3, 4]
for (let value of myArray) {
    console.log(value)
}

let mySet = new Set(["Jara", "Neme", 21])
for (let value of mySet) {
    console.log(value)
}

let myMap = new Map([
    ["name", "Jara"],
    ["email", "Neme"],
    ["age", 21]
])
for (let value of myMap) {
    console.log(value)
}

/*-----Break y Continue-----*/ 
for (let i = 0; i < 10; i++) {
    if (i == 5 || i == 6) {
        continue
    } else if (i == 9) {
        break
    }
    console.log("Hola ",i)
}