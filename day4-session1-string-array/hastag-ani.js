const str = 'india fights corona'
function hashTag(str) {
    let result = '#'
    const words = str.split(' ') // ['india','fights','corona']
    for(let i = 0; i < words.length; i++) {
        result +=  words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    //result +=  words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()

    }
    return result
}

console.log(hashTag(str)) // '#IndiaFightsCorona'
console.log(hashTag('jantaa curfew')) // '#JantaaCurfew'