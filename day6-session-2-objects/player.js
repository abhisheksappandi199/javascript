const player ={
    firstName : 'scahin',
    lastName:'tendukar',
    fullName : function()
    {
        return `${this.firstName} ${this.lastName}`
    },
    creed : function(name)
    {
        return `hi ${name}, my name is ${this.firstName} `
    }
}

console.log(player.fullName());//scahin tendukar
console.log(player.creed('ani'));//hi ani, my name is scahin

