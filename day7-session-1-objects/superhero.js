/*

Write a function to display the powers of the given super hero 

 

var superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
TEST CASE -

1. superPower(superHeroes, "Molecule Man");
returns 'Radiation resistance, Turning tiny, Radiation blast'

2. superPower(superHeroes, 'Iron Man'); 
returns 'Iron Man is not in the super heroes list'

*/
var superHeroes = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]
function super1(arr,name1)
{
    let array=[]
   for(let i=0;i<arr.length;i++)
   {
       if(arr[i].name == name1)
       {
           return (array.concat(arr[i].powers).toString(", "))
       }
       else
       {
           return (`${name1} is not in the super heroes list`)
       }
   }
}

  console.log(super1(superHeroes,'Molecule Man'));
  console.log(super1(superHeroes, 'Iron Man'));
  