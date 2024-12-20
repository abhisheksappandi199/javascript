const values =['IndiA','FighTs','CoRona']

function contUpper(values)
{
    let count = 0
  for(let c of values)
      for(let i=0;i<c.length;i++)
        if(c[i] == c[i].toUpperCase())
        {
            count++;
        }
  return count
}

console.log(contUpper(values));


// function countUpper(values) {
// 	let count = 0;
// 	for (const word of values) {
// 		for (const letter of word) {
// 			if (letter === letter.toUpperCase()) {
// 				count++;
// 			}
// 		}
// 	}
// 	return count;
// }

// console.log(countUpper(values)); //6