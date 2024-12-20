/*
    Primitive Data Types - hold just the value, they dont have properties nor do they have methods
        number
        string 
        undefined 
        boolean
        null is a object as per the document but if u do type of
           then i will return object 

    Object Data Types ( Non Primitive) - has properties & methods
        array 
        object       
*/

const n = 12.8
// console.log(n.round()) TypeError: n.round is not a function
console.log(Math.round(n)) // 13

const numbers = [10,20,30]
console.log(numbers.length) // 3
numbers.push(40) 
console.log(numbers) // [ 10, 20, 30, 40 ]