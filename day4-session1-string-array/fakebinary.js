function fakebinary(arr)
{
    let a=''
    for(let i=0;i<arr.length;i++)
    {
       if(parseInt(arr[i]) < 5)
       {
           a += '0'
       }
       else{
           a += '1'
       }
    }
  return a;

}


console.log(fakebinary('1235489'));  //'0001011'
