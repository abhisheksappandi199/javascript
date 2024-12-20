//shallow copy
//pass by reference -object

let m=[10,20]
let n=m

console.log(m,n); // [10,20].[10,20]
m.push(30)
console.log(m,n); //[10,20,30],[10,20,30]
n.push(40)
console.log(m,n); //[10,20,30,40],[10,20,30,40]

