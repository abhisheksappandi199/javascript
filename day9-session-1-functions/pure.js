const person = {
    name: 'arvind',
    city: 'bangalore',
    age: 22
}

// pure function
// doesnt change the argument value passed to it 
function updateProfile(person) {
    person = Object.assign({}, person)
    person.city = 'mysore'
    person.age += 1
    return person
}

const result = updateProfile(person)
console.log(result)
console.log(person)

// when we call the function with the same argument, it must return the same value 
const result2 = updateProfile(person)
console.log(result2)
console.log(person)

const result3 = updateProfile(person)
console.log(result3)
console.log(person)