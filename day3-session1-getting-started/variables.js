//remember tat we can assign the fn to a varible...
let city // undefined
const name = 'dct' // string 
const price = 150 // number 
const available = true // boolean 
const colors = ['red', 'blue', 'green'] // array 
const person = {
    id: 1, 
    name: 'sumanth'
} // object 

const greet = function() { // anonmyous
    return 'hi there'
} // function expresion

console.log(name) // 'dct' 
console.log(greet) // [Function: greet]
console.log(greet()) // 'hi there'

// function are treated as first class citizens
// hof - higher order function
// which takes another function as an argument

// const n =10, m = 20 
// function add(n,m) {

// }
// console.log(add(n,m))

//js is loosly typed lang bcs 