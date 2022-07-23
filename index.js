require('dotenv').config()
const express = require ('express')
const { Server } = require('http')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', function (req, res) {
    res.render('home')
})

app.get('*', function (req, res) {
    res.status(404).send('<h1>This aint it (404)<h1>')
})

app.listen(process.env.PORT)
