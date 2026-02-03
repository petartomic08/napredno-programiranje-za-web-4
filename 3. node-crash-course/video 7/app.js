const express = require('express')
const morgan = require('morgan')

const credentials = {
    userName: 'bob@gmail.com',
    password: '1234'
}

const app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     console.log('new request made')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('in the next middleware')
//     next()
// })

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum sit amet consecetur' },
        { title: 'Mario finds eggs', snippet: 'Lorem ipsum sit amet consecetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum sit amet consecetur' }
    ]
    res.render('index', { title: 'Home', blogs })
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'about' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create blog' })
})

app.get('/contact', (req, res) => {
    const about = {
        name: 'Mario Šutalo',
        email: 'mario.sutalo@gmail.com',
        info: 'Some text about me'
    }
    res.render('contact', { about })
})

app.get('/categories', (req, res) => {
    const categories = [
        { name: 'PCs', products: 23 },
        { name: 'Audio', products: 12 },
        { name: 'Video', products: 20 },
    ]
    res.render('categories', { categories })
})

app.get('/login', (req, res) => {
    res.render('login', { title: 'login' })
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (credentials.userName === username && credentials.password === password) {
        res.redirect('/')
    } else {
        res.render('login', { title: 'login', error: true })
    }
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'page not found' })
})

console.log('end')