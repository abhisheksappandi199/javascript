// es5 
var name = 'arjun', city = 'bangalore' 
var person = {
    name: name, 
    city: city,
    details: function(){
        return this.name + ' lives in ' + this.city 
    }
}
console.log(person)
console.log(person.details())

// es6 - concise properties / short hand properties 
// es6 - concise methods
const title = 'javascript', body = 'javascript is awesome'
const article = {
    title,
    body,
    details() { // concise methods
        return `${this.title} - ${this.body}`
    }
}
console.log(article)
console.log(article.details())