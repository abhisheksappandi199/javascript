function hasTag(str)
{
    let abhi='#'
     const words = str.split(" ")
     for(let i=0;i<words.length;i++)
     {
         abhi += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
     }
    return abhi
}

console.log(hasTag('make in india'));
