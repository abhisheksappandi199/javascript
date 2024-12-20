//push(10)    // mo
//push(10,20) //mo

function add()
{
    console.log(arguments ,arguments.length); //keyword -object

        for(let i=0;i<arguments.length;i++){
            console.log(i,arguments[i])
        }  
}
//argumnets has access to every argument tat 
//r passed to the fn


// add(10)
// add(10,20)
add(10,20,30)

const person ={
    name : "abhi",
    city : "bangalore"
}

console.log(person.length); //undefined
