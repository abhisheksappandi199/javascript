const arr=[['white','peace'],['blue','ocean breeze']]

function arr2obj(str)
{
 let result={}
 for(let j=0;j<arr.length;j++)
 {
     
        result[arr[j][0]] =arr[j][1]
     
 }
 return result
}



console.log(arr2obj(arr))