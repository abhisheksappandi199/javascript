/*
    falsy value - false, 0, '', undefined, NaN, null
    truthy value - true, 1, -1, 'dct', [], {}, [10], { name: 'arjun'}
*/

const values = [true, false, 0, 1, -1, '', undefined, NaN, null, [], {}, [10], 'dct']

function getTruthy(values) {
    // const result = []
    // for(let i = 0; i < values.length; i++) {
    //     if(values[i]) {
    //         result.push(values[i])
    //     }
    // }
    // return result
    return values.filter(function(ele){
        return ele
    })
}
console.log(getTruthy(values)) // [true, 1, -1, [], {}, [10], 'dct']

function getFalsy(values) {
    // const result = []
    // for(let i = 0; i< values.length; i++){
    //     if(!values[i]) {
    //         result.push(values[i])
    //     }
    // }
    return values.filter(function(ele){
        return !ele
    }) 
}

console.log(getFalsy(values)) // [false, 0, '', undefined, NaN, null]