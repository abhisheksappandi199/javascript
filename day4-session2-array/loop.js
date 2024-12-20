const player =['a','b','c','d']

console.log(player.join(',')) // 'abcd'

console.log(player) //['a','b','c','d']
//console.log(player[0]);  'a'

//foe loop
//initilization ; stopping condition ; inc / dec
for(let i=0;i<player.length;i++)
{
    console.log(player[i]);
    
}

//to access every elem in array
//forEach => fn takes each elem as a argument and prints it 

player.forEach(element => {
    console.log(element);
    
});

