//objects and array , pass by references

const person={
    name : "arvind",
    city :"bangalore"
}

function ChangeCity(person)
{
    console.log('8',person);
    person.city = "mangalore"
    console.log('10',person);
}

console.log('13',person);
ChangeCity(person)
console.log('15',person);

