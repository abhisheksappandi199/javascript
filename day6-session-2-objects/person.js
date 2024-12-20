//object contains properties and methods

const person ={
    id:1,
    name:'arun',
    details:function(){
        return `${this.id} - ${this.name}`
    }
}

console.log(person.id); //1
console.log(person.details); // [function:deatails]
console.log(person.details()); // 1 - arun

