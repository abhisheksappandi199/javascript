function wordFrequency(str)
{
   let arr=str.split(" ")
   let result ={}
   for(let i=0;i<arr.length;i++)
   {
       if(result.hasOwnProperty(arr[i]))
       {
           result[arr[i]] +=1
       }
       else
       {
           result[arr[i]]=1
       }
   }
   return result
}
console.log(wordFrequency('virat virat sachin dhoni'));
console.log(wordFrequency('mango mango apple'));
