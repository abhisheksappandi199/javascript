function frequency(str)
{
  const result={}
  for(let i=0;i<str.length;i++)
  {
      if(result.hasOwnProperty(str[i]))
      {
          result[str[i]] += 1
      }
      else
      {
          result[str[i]]=1
      }
  }
  return result
}

console.log(frequency('ddttcc'));
console.log(frequency('abcdab'));