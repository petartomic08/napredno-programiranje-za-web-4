function readFile(filePath, callback) {
    // filePath = 'Stream quality settings'
    // callback = () => {
    //     console.log('callback function called :)')
    // }
    
    setTimeout(() => {
        callback("this is file content") 
    }, 3000);
}

readFile('./blog.txt', (content) => {
    console.log(content)
})
