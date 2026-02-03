async function searchUsers() {
    const searchResultP = document.getElementById('searh-result-p')
    const userInput = document.getElementById('user-name-input')
    const userName = userInput.value
    const result = await fetch(`https://dummyjson.com/users/search?q=${userName}`)
    if (!result.ok) {
        searchResultP.innerText = 'Fetch error'
        return
    }
    const data = await result.json()
    displayUsersInTable(data.users)
    console.log(data.users)
}

function displayUsersInTable(users) {
    const table = document.getElementById('users-table')
    const tableHeader = `
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        
    `
    let tableContent = tableHeader
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        tableContent = tableContent + `<tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        </tr>`
    }
    table.innerHTML = tableContent
}