// objects - properties & methods
const p1 = 'sachin', p2 = 'shewag', p3 = 'virat'
console.log(p1) // 'sachin'

// ordered, integer indexed, collection of values 
const players = ['sachin','shewag','virat'] // new Array('sachin','shewag', 'virat')
console.log(players)
console.log(players[0]) // 'sachin'
console.log(typeof players) // 'object'
console.log(Array.isArray(players)) // true

const person = {
    id: 1, 
    name: 'arjun'
}
console.log(person)
console.log(typeof person) // 'object'
console.log(Array.isArray(person)) // false