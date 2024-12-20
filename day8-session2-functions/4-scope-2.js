let n=10 , m=20 

//primitive types  pass by value  deep copy
function add(n,m){
    //parameter == they are like local varibale within the function
    console.log(n,m);
    n='hello' , m='world'
    console.log(n,m);
    return n+m
    
}
console.log(add(n,m));   // 'hello world'
console.log(n,m);      //10,20

