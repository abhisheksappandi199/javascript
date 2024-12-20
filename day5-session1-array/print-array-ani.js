const numbers = [[10,20], [30,40]]

for(let i = 0; i < numbers.length; i++) {
    console.log(`row ${i}`)
    for(let j = 0; j < numbers[i].length; j++) {
        console.log(numbers[i][j])
    }
}

numbers.forEach(function(arr, i){
    console.log(`row ${i}`)
    arr.forEach(function(n){
        console.log(n)
    })
})
