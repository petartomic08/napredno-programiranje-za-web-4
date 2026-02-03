const http = require('http')
const fs = require('fs')
const lodash = require('lodash')


const server = http.createServer((req, res) => {
    console.log(`request url is: ${req.url}`)
    res.setHeader('Content-Type', 'text/html')
    if(lodash.isString(234)){
        console.log('value is string')
    } else {
        console.log('value is not string')
    }
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path = path + 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location','/about')
            res.end()
            break
        case '/contact':
            path += 'contact.html'
            res.statusCode = 200
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})