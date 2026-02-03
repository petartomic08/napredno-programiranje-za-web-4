let counter = 0

function increaseCounter() {
    counter += 1;
    updateUI()
}

function updateUI() {
    let firstSpan = document.getElementById('first-span')
    let secondSpan = document.getElementById('second-span')
    let thirdSpan = document.getElementById('third-span')

    firstSpan.innerHTML = "count is" + counter
    secondSpan.innerHTML = counter
    thirdSpan.innerHTML = counter
}