const name = 'dct'
const prices = [10, 20]
//for - string & array
 for(let i = 0; i < name.length; i++) {
     console.log(name[i])
 }

//  for(let i = 0; i < prices.length; i++) {
//      console.log(prices[i])
//  }

// forEach - array 
// name.split('').forEach(function(c){
//     console.log(c)
// })

// prices.forEach(function(p,i){
//     console.log(i,p)
// })



// for of - string & array 
for(const c of name) {
    //console.log(typeof c)
    console.log(c)
}

for(const p of prices) {
    console.log(p)
}

