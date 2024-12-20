const developer = {
    name: 'anil',
    skills: ['js', 'react', 'node'],
    details: function () {
       this.skills.forEach(function(skill)
       {
        console.log(`${this.name} knows ${skills}`);
       }.bind(this))
       
        
       
    }
}

developer.details()  