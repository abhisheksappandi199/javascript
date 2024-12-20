//ES6
//class - it is syntatical sugar over es5 constructor functions
//blue print for object
//properties - name & runs
// methods -calcAvg

class Player{
    //to set initial values for properties
    constructor(name,runs)
    {
        this.name=name
        this.runs=runs
    }

    calcAvg(){
        let sum=0
        this.runs.forEach(function (run){
            sum += run
        })
        return `batting average = ${sum/this.runs.length}`
    }
}