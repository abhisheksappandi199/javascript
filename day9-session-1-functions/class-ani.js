// es6 
// class - it is a syntatical sugar over es5 constructor functions  
// blue print for objects
// properties - name & runs 
// methods - calcAvg

class Player {
    // to set the initial values for  properties
    constructor(name, runs) {
        this.name = name 
        this.runs = runs
    }

    calcAvg() {
        let sum = 0
        this.runs.forEach(function (run) {
            sum += run
        })
        return `batting average - ${sum / this.runs.length}` 
    }
}

const virat = new Player('virat', [30, 40, 80])
console.log(virat)
console.log(virat.calcAvg())