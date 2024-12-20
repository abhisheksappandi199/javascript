// unordered, string indexed, collection of values
const mobile = {
    // key (property): value 
    'sunny': '7710928352',
    'shashank': '8050950295',
    ani : '9740411566',
    
}

console.log(mobile)
console.log(typeof mobile) // 'object' 

// access key / prop of an object 
console.log(mobile.ani) // '9740411566'
console.log(mobile.sunny) // '7710928352'
console.log(mobile['ani']) // '9740411566'
console.log(mobile.harish) // undefined 

// add a new key value pair into an object
mobile.dct = '991681168'
mobile['mani'] = '9876543211'
console.log(mobile)

// update a keyvalue pair 
mobile.ani = '1234567890'
mobile['ani'] = '0987654321'
console.log(mobile)

// remove (delete) a key value pair 
delete mobile.ani
delete mobile['ani']
console.log(mobile)