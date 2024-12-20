const number=[[10,20],[30,40]]

for(let i=0;i<number.length;i++)
{
    console.log(`rows ${i}`);
    for(let j=0;j<number[i].length;j++)
    {
        console.log(number[i][j]);
        
    }
    
}

number.forEach(function(ele , i)
{
    console.log(`rows ${i}`);
    number.forEach(function(n)
    {
        console.log(n);
        
    })
    
})