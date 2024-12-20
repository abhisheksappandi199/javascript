/*
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

colour_association([["white", "goodness"], ["blue", "tranquility"]])

returns [{'white': "goodness"}, {'blue': "tranquility"}])
*/
function colour_association(a)
{

let a1=[]
 for(let i=0;i<a.length;i++)
 {   let z={}
     z[a[i][0]]=a[i][1]
     a1.push(z) 
}

return a1
}

console.log(colour_association([["white", "goodness"], ["blue", "tranquility"]]));


// function colour_association(colors) {
// 	let result = [];
// 	let obj = {};
// 	for (let i = 0; i < colors.length; i++) {
// 		obj[colors[i][0]] = colors[i][1];
// 		result.push(obj);
// 		obj = {};
// 	}
// 	return result;
// }