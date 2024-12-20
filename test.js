// let arr = [1, 2, 3, 4, 5, 3, 5]
// function Duplicate(arr) {
//     console.log('jsdfjsj');
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; i < arr.length; j++) {
//             if (arr[i] != arr[j]) {
//                 result.push(arr[i])
//             }
//         }
//     }
//     return result
// }
//     console.log('resuly', Duplicate(arr))
    
// function Outer(number){
//   let num = number

//   return function Inner(){
//     return num
//   }
// }

//let result = Outer(20)
//console.log('clouser',result());

var arr = [1,2,3,4,5,3,5]
function Duplicate(arr){
  let result = []
for(let i=0;i<arr.length ; i++){
  for(let j =1 ;i<arr.length ; j++){
    if(arr[i] != arr[j]){
      result.push(arr[i])
    }
  }
}
return result
}
console.log('resuly',Duplicate(arr));

// for (var i = 1; i <= 2; i++) {

//   (function(i){ 

//       setTimeout(function() { console.log(i) }, 100);

//   })(i);

// }

var salary = "1000$";

 (function () {
console.log("Original salary was " + salary);

 var salary = "5000$";

 console.log("My New Salary " + salary);
})();




const shape = {
  radius: 10,
  diameter() {
      return this.radius * 2;
  },
  perimeter: () => {
      return 2 * Math.PI * this.radius;
  },
};

// your answer first console  -> 
// your answer second console ->

//  console.log(shape.diameter()); // 20
//  console.log(shape.perimeter()); // 20 * pi


function sayHi() {
  console.log(name);  // undefined
  console.log(location); // ref error
  var name = 'John Doe';
  const location = 'mother earth';
}

// your answer first console  -> 
// your answer second console ->

// sayHi()


// 3
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  return 'abhi'
}

const john = new Person('john', 'doe'); // 
const jane = Person('jane', 'doe'); //

// your answer first console  -> 
// your answer second console ->

// console.log(john);
// console.log(jane);


(() => {
let x = (z = 10);
})();

// console.log(typeof x); // 
// console.log(typeof z); // number


const users = [
  { name: "joan", gender: "female" },
  { name: "john", gender: "male" },
  { name: "kim", gender: "female" }
]


let arr = users.filter(ele => ele.gender === 'female').map(ele => `Ms. ${ele.name}`)
console.log(arr)
// Output = ["Ms. joan", "Ms. kim "]

// your solution

// Array.prototype.myFilter

Array.prototype.myFilter = function(){
  
return '' 
}


// let name1 = 'mom'

// function palindrome(str){
//     let reverse = ''
//     for(let x of str){
//         reverse = x + reverse
//     }
//     return reverse === str ? 'palindrome' : 'not a palindrome'
// }

// console.log(palindrome(name1));

let myArray = [1, 2, 3, 4, 9, 8];
//sum of two should be 10;


function checkSum(a){
    let result = []
    for(let i=0 ; i<a.length ; i++){
        for(let j=1 ; j<a.length ; j++){
            if(a[i]+a[j] === 10){
                if(result.indexOf(a[i] || a[j]) < 0)
                result.push(a[i] , a[j])      
            }
        }
    }
    return result
}

console.log(checkSum(myArray));


// let busMatrix = [ 
//     ['empty','empty','selected','empty','empty'] ,
//     [0 , 0 , 0 ,0] ,
//     [0 , 0 , 0 ,0] ,
//     [0 , 0 , 0 ,0] ,
//     [0 , 0 , 0 ,0] ,
//                  ] 


// function Book(layout , seats){
//     let count = 0
//     let arr = []
//     for(let i=0 ; i<layout.length ; i++){
//         for(let j=0 ; j<layout[i].length ; j++)
//        // console.log(layout[i][j]);
//        //for(let k=seats ; k<=seats ; k--){

//         while(seats > 0){

//             var seat= ''
            
//             for(let z=0 ;z<seats ; z++){
//                 seat = seat + `!${layout[i][j+z]} === 'empty' &&`
//             }
            
//         if(seat.substring(1,seat.length-4)){ 
//             console.log(seat);
//             console.log(i,j);
//             arr.push({i,j})
//             count++
//             seats--
//             break
//          }

//        }

//     }
//     return arr
// }


//console.log(Book(busMatrix , 3));

let arr =  [1, 2, 3, 2, 4]
let result = {}
for(let i=0;i<arr.length ; i++){
    if(!result.hasOwnProperty(arr[i])){
        //console.log(arr[i]);
        result[arr[i]] = 1
    }
    else {
        result[arr[i]] += 1
    }
}
console.log(result);

let a = [9,5,2,1,6,8]


for(let i=0 ;i <a.length ; i++){
    for(let j=0;j<a.length ; j++){
        if(a[i]<a[j]){
            let temp = a[i] ;
            a[i] = a[j]
           a[j] = temp
        }
    }
}

console.log(a);

//// datami///

// import React from "react";
// import "./App.css";
// const data = {
//   "2019-03-01": {
//     "bytes": 4294967296,
//     "maxBytes": 10737418240
//   },
//   "2019-04-01": {
//     "bytes": 2147483648,
//     "maxBytes": 10737418240
//   },
//   "2019-05-01": {
//     "bytes": 5368709120,
//     "maxBytes": 10737418240
//   },
//   "2019-06-01": {
//     "bytes": 1288490188,
//     "maxBytes": 10737418240
//   }
// }
// let formatedArray = []
// for(let x in data){
//   let percent = Math.floor(data[x]["bytes"] / data[x]["maxBytes"]  * 100 )
//   console.log(data[x].bytes);
  
//   formatedArray.push(x,percent)
// }
// console.log("hi",formatedArray);

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//         data : formatedArray,
//         current : 0 ,
//         percent : 1
//     }
//   }
//   handleDec = () =>{
//     this.setState((prev)=>{
//       return {
//         current : prev.current - 2 ,
//         percent : prev.percent - 2
//       }
//     })
//   }
//   handleInc = () =>{
//     this.setState((prev)=>{
//       return {
//         current : prev.current + 2 ,
//         percent : prev.percent + 2
//       }
//     })
//   }
//   render(){
//     return <div> 
//       <button onClick={this.handleDec}>prev</button>
//       <p>{`${this.state.data[this.state.current]} - ${this.state.data[this.state.percent]}%`}</p>
//       <button onClick={this.handleInc}>next</button>
//     </div>;
//   }

// }

// export default App;


// fn (callback , num invertval ,num  endtime )
//fun ('log' ,2000 ,10000)

()=>{
  console.log('log');
}

function interval(log,interval ,endtime){
      for(let i=0;i<endtime ; i+interval){
         setTimeout(() => {
             log()
         }, interval * i);
      }
}

function log(){
 return console.log('log');
}

console.log(interval(log,2000,10000));