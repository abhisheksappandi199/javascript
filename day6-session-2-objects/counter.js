const counter={
    count :0,
    getCount : function(){
        return this.count
    },
    up :function(){
         this.count +=1
         return this.getCount()
    },
    down:function(){
        this.count -=1
        return this.getCount()
    },
    incrementBy:function(){
        this.count +=10
        return this.getCount()
    },
    reset:function(){
        this.count=0
        return this.getCount()
    }
}