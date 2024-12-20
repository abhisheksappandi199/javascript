const city = 'BaNGaLore'

function SwapCase(a)
{ 
    let final=''
  //let a = str.split('');
  //console.log(a);
  for(let i = 0;i< a.length;i++)
  {
      if(a[i] === a[i].toUpperCase())
      {
          final += a[i].toLowerCase();
      }
      else{
          final += a[i].toUpperCase();
      }
  }
  return final;
}

console.log(SwapCase(city));
console.log(SwapCase('AFags'));

