//outside the fn  - {}
// inside the fn  (es5) - global

console.log(this);  //{}
//arrow fn donot have a value for the this keyword of their own
//the value of this keyword, will be the value of the this keyword outside the function(outer scope)

const print = () => {
    console.log(this); //{} - outer fn of this is {}
    
}
print()

const developer ={
    name : 'annil',
    skills : ['js','react','ruby'],
    details : function(){
        //this - current obj
        this.skills.forEach((skills)=>{
            //this prev fun scope - current obj
            console.log(`${this.name} knows ${skills}`);
            
        })
        return 'Done'
    }
}

console.log(developer.details());
