require('dotenv').config()
const express = require ('express')
const { Server } = require('http')
const app = express()

app.get('/', function (req, res) {
    res.send('Home Page')
})

app.get('*', function (req, res) {
    res.status(404).send('<h1>This aint it (404)<h1>')
})

app.listen(process.env.PORT)
