const objs={ white: 'peace', blue: 'ocean breeze' }

function onj2arr(objs)
{
   let a1=[]
   for(let a in objs)
   {
       let z=[] 
       a1.push(z.push(a, objs[a]))
          
   }
   return a1
}

console.log(onj2arr(objs))    /// [ 2, 2 ]
console.log(Object.entries(objs));

// actual o/p >> [ [ 'white', 'peace' ], [ 'blue', 'ocean breeze' ] ]