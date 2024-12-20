//NAN is not a nmber
console.log(10 /'a');
const result = 10 /'a'
//dont allow u to compare nan and 
// so u have to use number.isnan
console.log(typeof result) ;//number
console.log(10 == 10); //true
//console.log(result == NAN); //false
console.log(Number.isNaN(result)); // true

console.log(parseInt('true')); //nan
console.log(parseInt('a')); //NaN
 
 
 


