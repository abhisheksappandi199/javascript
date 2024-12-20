const obj = { white: 'peace', blue: 'ocean breeze' }

function obj2Arr(obj) {
    const result = []
    for(const key in obj) {
        result.push([key, obj[key]])
    }
    return result 
}

//console.log(obj2Arr(obj)) // [['white', 'peace'],['blue', 'ocean breeze']]

console.log(Object.entries(obj))