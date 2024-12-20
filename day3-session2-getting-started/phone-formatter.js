function phoneformatter(str)
{
    let a =str.slice(0,4);
    let b =str.slice(4,7);
    let c= str.slice(7);
   //return ('('+a+')'+' '+b +'-'+c);

   //ES6 features
return `(${a}) ${b} ${c}`

}
console.log(phoneformatter('5555555555'));//(5555) 555-555
console.log(phoneformatter('1234567890'));//(1234) 567-890

