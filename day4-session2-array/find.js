const numbers =[10,20,30,40,50]

//console.log(numbers.includes(30)); //true
//console.log(numbers.indexOf(30) >= 0); //true

 // find the only fst elem in array

 let result = numbers.find(function (elem)
 {
     return elem > 25
 })
console.log(result);  // 30

let  result1 = numbers.find(function (elem)
{
    return elem > 250
})
console.log(result1);  // undefined



