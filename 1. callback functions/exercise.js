function fetchData(timeout, callback) {
    setTimeout(() => {
        callback()
    }, timeout);
}

fetchData(2000, () => {
    console.log('function called')
})