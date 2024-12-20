// es5 - var - hoisted 
console.log(city) // undefined 
var city = 'bangalore'
console.log(city) // 'bangalore' 

// es6 - let & const - dont get hoisted

// ReferenceError: name is not defined
// console.log(name) 
const name = 'dct' 
console.log(name) // 'dct'