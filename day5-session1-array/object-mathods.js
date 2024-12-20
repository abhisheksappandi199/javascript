// create an object called as product 
// properties - id, name, price
const product = {
    id: 1,
    name: 'biscuit',
    price: 10
}

// get all the properties aka keys 
console.log(Object.keys(product)) // [ 'id', 'name', 'price' ]

// get all the values 
console.log(Object.values(product)) // [ 1, 'biscuit', 10 ]

// check if a property aka key is present 
// 1. - Object.keys()
console.log(Object.keys(product).includes('name')) // true
console.log(Object.keys(product).includes('category')) // false 

// 2. - hasOwnProperty 
console.log(product.hasOwnProperty('name')) // true
console.log(product.hasOwnProperty('category')) // false

// check if a value is present 
console.log(Object.values(product).includes('biscuit')) // true 