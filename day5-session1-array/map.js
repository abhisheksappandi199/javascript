const numbers = [10,20,30,40]

const result = numbers.map(function(ele){
    return ele+2
})

console.log(numbers);
console.log(result);

//c style
function changeele(no ,n)
{
    const result =[]
    for(let i=0;i<no.length;i++)
    {
        result.push(no[i]+n);
    }
    return result;
}

console.log(changeele(numbers,2));

