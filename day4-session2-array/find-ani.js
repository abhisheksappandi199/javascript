const numbers = [10,20,30,40,50]

// console.log(numbers.includes(30)) // true 
// console.log(numbers.indexOf(30) >= 0) // true 

// find only the first element in the array greater than 25

const result = numbers.find(function(ele){
    return ele > 25
    // if(ele > 25) {
    //     return true 
    // }
})
console.log(result) // 30

const result2 = numbers.find(function(ele){
    return ele > 250
})

console.log(result2) // undefined 

// c style 
function findEle(numbers, n){
    let result 
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > n) {
            result = numbers[i]
            break 
        }
    }
    return result 
}

console.log(findEle(numbers, 25)) // 30
console.log(findEle(numbers, 250)) // undefined