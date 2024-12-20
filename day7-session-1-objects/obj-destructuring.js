// es5
var person = {
    name: 'arjun',
    city: 'bangalore'
}

var name = person.name , city = person.city
console.log(name, city)

//es6 - object destructuring
const article = {
    title: 'javascript',
    body: 'javascript is awesome'
}

const {title, body} = article 
// const title = article.title, body = article.body
console.log(title, body)