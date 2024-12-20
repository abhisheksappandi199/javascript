const t1 ={
    id:1,
    title:'deploy'
}

const t2 = Object.assign({},t1)
console.log(t1,t2);

t2.id=2
console.log(t1,t2);

