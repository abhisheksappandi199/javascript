/*
/*
Function Name: swapKeyAndValue
Numbers of inputs: 2

Write a function called swapKeyAndValue, which accepts an object and a key.

The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.

Examples:

var instructor = { name: 'Elie', job: 'Instructor' };

swapKeyAndValue(instructor, 'name'); // {Elie: 'name', job: "Instructor"}

swapKeyAndValue(instructor, 'job'); // {name: "Elie", Instructor: 'job'}
*/
var instructor = { name: 'Elie', job: 'Instructor' }


function swapKeyAndValue(obj,k){
    let ob = {}
    for(var key in obj){
        if(key==k){
        ob[obj[key]] = key
        }else{
            ob[key]=obj[key]
        }
    } 
    return ob
}

console.log(swapKeyAndValue(instructor,'name'))