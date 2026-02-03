const { error } = require('console')
const fs = require('fs')
fs.readFile('./docs/blog.txt', (error, fileData) => {
    if (error) {
        console.log(`error opening file: ${error}`)
    }
    console.log(fileData.toString())
})

// fs.writeFile('./docs/blog.txt','Hi, again', (err) => {
//     if (err) {
//         console.log('error writing to file')
//         return
//     }
//     console.log('success')
// })

// fs.writeFile('./docs/blog2.txt', 'hi to blog 2', (err) => {
//     console.log('new file created')
// })

// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('folder created')
// })

if (fs.existsSync('.docs/deleteme.txt')) {
    fs.unlink('.docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('file deleted')
    })
}