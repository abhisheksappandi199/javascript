function minMaxKeyInObject(a){
    let min = 1000
    let max = 0
    let z=[]
    for (let key in a)
    {
        min = min < parseInt(key) ? min : parseInt(key) 
   max= max > parseInt(key) ? max : parseInt(key)
   
    
}
     z.push(min)
     z.push(max)
     return z   
}

console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
