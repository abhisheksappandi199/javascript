const menuItems = [
    { id: 1, name: 'chilly chicken', isVeg: false},
    { id: 2, name: 'chilly panner', isVeg: true}, 
    { id: 3, name: 'veg biryani', isVeg: true}, 
    { id: 4, name: 'chicken biryani', isVeg: false }
]

function vegOnly(menuItems) {
    const result = menuItems.filter(function(item){
        return item.isVeg == true 
    })
    return result 
}

console.log(vegOnly(menuItems)) 

function search(menuItems, term) {
    const result = menuItems.filter(function(item){
        return item.name.includes(term) 
    })
    return result 
}

console.log(search(menuItems, 'bir'))