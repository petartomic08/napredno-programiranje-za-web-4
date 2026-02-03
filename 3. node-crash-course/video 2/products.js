console.log('hi from products')
const product1 = { name: 'Iphone 15', price: 1000 }
const product2 = { name: 'Samsung s24', price: 1000 }
const secretProduct = {name: 'test Phone', price: 1000000}

function calculatePrice(item1, item2) {
    return item1 + item2
}

module.exports = { product1, product2, calculatePrice }