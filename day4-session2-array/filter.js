const numbers =[10,20,30,40,50]


// find all ement tat satisfy the condity
//if false return emppty array
const res = numbers.filter(function(ele)
{
    return ele >25
 }) // [30,40,50]

 console.log(res);
 

 const res1 = numbers.filter(function(ele)
{
    return ele >250
 }) // []
console.log(res1);

 