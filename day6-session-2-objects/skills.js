const developer = {
    name: 'anil',
    skills: ['js','react','node'],
    details: function(){
        console.log(this) // current object
        this.skills.forEach(function(skill){
            // console.log(this) global object
            console.log(`${this.name} knows ${skill}`)
        })
    }
}

developer.details() 
/*
    undefined knows js
    undefined knows react
    undefined knows node 
*/
