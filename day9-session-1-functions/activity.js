function Person(firstname,lastname,age)
{
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age,
    this.fullName = function(){
        return `${this.firstname} ${this.lastname}`
    }
}

const p1 =new Person('amar','kumar','21')
console.log(p1.fullName());
console.log(p1.firstname);

