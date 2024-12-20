// es5 anonymous function
const add = function(a,b){
    return a + b
}

//es6 arrow
const sum = (a, b) => {
    return a + b
}
console.log(sum(10,20)) // 30

const numbers = [10,15,20,25]
const result1 = numbers.filter(function(ele){
    return ele % 2 == 0
})
console.log(result1)

// es6 arrow function - v1
const result2 = numbers.filter((ele) => {
    return ele % 2 == 0
})
console.log(result2)

// es6 arrow function - v2 - () option, if only 1 parameter
const result3 = numbers.filter(ele => {
    return ele % 2 == 0
})
console.log(result3)

// es6 arrow function - v3 - {} and return optional, if we are executing only 1 statement inside the function
const result4 = numbers.filter(ele => ele % 2 == 0)
console.log(result4)

console.log(numbers.filter(ele => ele % 2 == 0))