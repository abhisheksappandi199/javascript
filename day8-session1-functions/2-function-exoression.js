//console.log(add) // undefine
//console.log(add(2,2)); //err not hoisted

const add = function(a,b){
    //anonymous function
    return a+b
}

console.log(add(10,20));


//in js function are treated as first class expression
console.log(typeof add); //function

