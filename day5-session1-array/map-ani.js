const numbers = [10,15,20,25]

const result = numbers.map(function(ele){
    return ele + 2 
})

console.log(numbers)
console.log(result)

// c style 
function changeEle(numbers, n) {
    const result = []
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + n)
    }
    // numbers.forEach(function(n){
    //    result.push(n + 2)
    // })
    return result
}

console.log(changeEle(numbers, 2)) // [12, 17, 22, 27]