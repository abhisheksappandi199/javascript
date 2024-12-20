const name ='dct' // 'string - primitive
console.log(name); //dct
console.log(name[0]); // 'd'
console.log(name[10]); //undefine

console.log(name.length); // 3
console.log(name.toUpperCase()); //'DCT'
console.log(name); //'dct


//str -> str object -> we can use its properties nad methods
//string are internally converted to objects?

const n =10
console.log(n.toString()); // '10'
//covting the no to no. object 

//capitalise
const city ='bangalore'
console.log(city[0].toUpperCase()+city.slice(1).toLowerCase());


