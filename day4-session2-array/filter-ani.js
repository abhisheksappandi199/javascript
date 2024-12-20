const numbers = [10,20,30,40,50]

// find all elements that satisfy the condition

const result = numbers.filter(function(ele){
    return ele > 25
}) 
console.log(result) // // [30,40,50]

const result2 = numbers.filter(function(ele){
    return ele > 250
})
console.log(result2) // []


function filterEle(numbers, n) {
    const result = []
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > n) {
            result.push(numbers[i])
        }
    }
    return result 
}

console.log(filterEle(numbers, 25)) // [30,40,50]
console.log(filterEle(numbers, 250)) // []