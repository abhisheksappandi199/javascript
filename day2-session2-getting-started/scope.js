// function print() { 
//     var msg = 'ola'
//     if (true) { 
//         // iife - immediately invoked function express
//         // use var keyword & provide block scope
//          // anonymous function - a function without a name
//          (function ()
//          {
//             var msg = 'hello there'
//             msg = msg.toUpperCase()
//             console.log(msg)
//          }())
        
//     }
//     return msg
// }

// console.log(print()) // 'ola'


 (function printNumbersForEvery2Sec (n)
 {
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          console.log(i)
        }, i * 500)
      }
  }(10))