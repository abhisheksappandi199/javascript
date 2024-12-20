//ES5
// constructor functions / Object Prototype Function
// blue print for player objects
// properties - name & runs
// methods - calcAvg

function Player(name, runs){
    //set the initial values of properties
    this.name = name 
    this.runs = runs  
     this.details = `${this.name} has played in ${this.runs.length} matches`
    this.calcAvg = function(){
        let sum = 0 
        this.runs.forEach(function(run){
             sum += run 
        })
        return `batting average - ${sum / this.runs.length}`
    }
 }
 
 // new keyword is used for creating an object
 const virat = new Player('virat', [30,40,80])
 console.log(virat.details)
 console.log(virat.calcAvg())
 
 const dhoni = new Player('dhoni', [30,30,30])
 console.log(dhoni.details)
 console.log(dhoni.calcAvg())
 
 const sachin = new Player('sachin', [50,100,60])
 console.log(sachin.details)
 console.log(sachin.calcAvg())
 
 
 // const numbers = new Array(10,20,30,40)
 // const prices = new Array(1.25,3.25)