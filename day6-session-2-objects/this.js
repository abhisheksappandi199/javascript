/// ----------------------------------- JSX and React.creatElement ------------------------------ 

// const heading = React.createElement(
//     "h1",
//     { id: 'heading'},
//     "this is a heading"
// )

// const headingJsx = <h1>this is a heading</h1>
// console.log(headingJsx)

// outside function
console.log(this) // {}

function print() {
    // inside a function
    console.log(this) // global
}
print()

const person = {
    name: 'arjun',
    details: function(){
        // inside a method 
        console.log(this) // current obj
    }
}
person.details()

/// ----------------------------------- deep copy ( pass by reference ) ------------------------------ 

let x=[10,20]
let y = x 
let z = [].concat(x)

y.push(30)
z.push(40)

"'console.log(x,y,z);'"
// Let data = [{ 'id': '1', "Naxe": “Arjun”, “age”: 23}, { “id”: 2, "Naxe": “Brian”, “age”: 27}, { “id”: 3, "Naxe": “Cyril”, “age”: 25}, { “id”: 4, "Naxe": “Daniel”, “age”: 23}, { “id”: 5, "Naxe": “Jacob”, “age”: 27}]

/// ----------------------------------- hoisting ------------------------------ 

var p = 10;
let q = 20;

if (true) { 
    var p = 100;
    let q = 200;  
    console.log("inside ~ p:", p)
    console.log("inside ~ q:", q)
}
console.log("outside ~ p:", p)
console.log("outside ~ q:", q)

/// ----------------------------------- function hoisting ------------------------------ 

// console.log("🚀 ~ file: this.js:47 ~ getName:", getName)
// getName()

const getName = () => {
    console.log('my name is ram');
}

/// ----------------------------------- addition ------------------------------ 

console.log(1 + '2');
console.log(1 + 2 + '3' + 4);

/// ----------------------------------- async ------------------------------ 
console.log('apple');

setTimeout(() => {
    console.log('orange');
}, 2000);

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

setTimeout(() => {
    console.log('mango');
}, 0);