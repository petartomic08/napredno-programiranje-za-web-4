// setInterval(() => {
//     let time = new Date().toLocaleString('HR')
//     console.log(time)
// }, 1000)

setInterval(displayTime, 1000)


function displayTime() {
    let time = new Date().toLocaleString('HR')
    console.log(time)
}

