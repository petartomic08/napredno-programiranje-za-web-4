const car = 'audi'

switch (car) {
    case 'audi':
        console.log('car is audi')
        break;
    case 'bmw':
        console.log('car is bmw')
        break
    case 'opel':
        console.log('car is opel')
        break
    default:
        console.log('car is something else')
        break;
}

if (car === 'audi') {
    console.log('car is audi')
} else if (car === 'bmw') {
    console.log('car is bmw')
} else if (car === 'opel') {
    console.log('car is opel')
} else {
    console.log('car is something else')
}