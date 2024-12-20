//constructor functions /object prototype function
//blueprint for player objects
//properties - name and runs
//methods - calcAvg

function Player(name ,runs)
{
    this.name = name
    this.runs =runs
    this.details = `${this.name} has played in ${this.runs.length} matches`
    this.calcAvg = function(){
        let sum =0
        this.runs.forEach(function (run){
            sum += run
        })
        return `batting average - ${sum / this.runs.length}`
    }
}

//new keyword 

