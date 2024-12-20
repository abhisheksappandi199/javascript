const person = {
    name: 'arvind',
    city: 'bangalore', 
    age: 22
}

// impure function
function changeCity(person) {
    person.city = 'mysore'
    return person
}

const result = changeCity(person) 
console.log(result)
console.log(person)
