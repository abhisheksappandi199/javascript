const developer = {
    name: 'anil',
    skills: ['js', 'react', 'node'],
    details: function () {
        let _this=this
        this.skills.forEach(function(skill){
            console.log(`${_this.name} knows ${skill}`);
              
        })
      
    }
}

developer.details() 