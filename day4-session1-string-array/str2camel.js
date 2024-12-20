function str2camel(str)
{
    let abhi=''
    const sp =str.split(' ')

   abhi += sp[0].toLowerCase();

   for(let i=1;i<sp.length;i++)
   {
       abhi += sp[i].charAt(0).toUpperCase() + sp[i].slice(1).toLowerCase()
   }

    return abhi
}

console.log(str2camel('hi there'));
console.log((str2camel('my name ia abhi')));

