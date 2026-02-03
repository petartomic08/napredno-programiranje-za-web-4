setTimeout(displayName, 4000);

function displayName() {
    let name = "Mario"
    console.log(`My name is: ${name}`)
}

setTimeout(() => {
    let surname = 'Šutalo'
    console.log(`Surname is: ${surname}`)
}, 2000);