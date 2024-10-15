const products = [
    {name: 'laptop', price: 3200, brand: 'lenvo', color: 'silver'},
    {name: 'Phone', price: 15000, brand: 'Sumsung', color: 'golden'},
    {name: 'Watch', price: 300, brand: 'casio', color: 'yellow'},
    {name: 'Camera', price: 9000, brand: 'Canon', color: 'gray'},
    {name: 'sunglss', price: 300, brand: 'Prado', color: 'black'},
    
]
const brands = products.map(product => product.name)
console.log(brands)

products.forEach(product => console.log(product.color))

// 3 filter
const cheap = products.filter(product => product.price >=15000)
console.log(cheap)

const special = products.find(p => p.name.includes('n'))
console.log(special)
