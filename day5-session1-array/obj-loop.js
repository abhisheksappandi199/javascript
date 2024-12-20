//for  - arr str
//forEach - arr 
// for of - arr str

// for in - only objects

const product ={
    id : 1,
    name : 'abhi',
    price : 10
}

const prop = 'name'
console.log(product.prop); // undefined
console.log(product[prop]); // abhi


for(const key in product)
{
   console.log(key,product[key]);
   
}