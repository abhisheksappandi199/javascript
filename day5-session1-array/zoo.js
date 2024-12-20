const myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
]


/*
[
  'King Kong the gorilla is 42',
  'Nemo the fish is 5',
  'Phil the groundhog is 11'
]
*/

let res = myZoo.map(function (ele ,i)
{
  return `${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]} `
})


console.log(res);
console.log(myZoo[0]) // [ 'King Kong', [ 'gorilla', 42 ] ]
console.log(myZoo[0][0]) // 'King Kong'
console.log(myZoo[0][1]) // [ 'gorilla', 42 ]
console.log(myZoo[0][1][0]) // 'gorilla'
console.log(myZoo[0][1][1]) // 42

// function zooInventory(myZoo) {
//     let str=[]
//     for(let i=0;i<myZoo.length;i++)
//     {
      
//        for(let j=0;j<myZoo[i].length;j++)
//        {
//         for(let k=0;k<myZoo[i][j].length;k++)


//             str += `${myZoo[i][j]} the ${myZoo[k]} is ${myZoo[k+1]} `

//        }
//     }
//     return str
//}

// function zooInventory(myZoo)
// {
//     let arr=[]
//     let res =''
//     for(let i=0;i<myZoo.length;i++)
//     {
//          res =`${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]} `
//          arr.push(res)
//     }
//     return arr
// }

// console.log(zooInventory(myZoo))




