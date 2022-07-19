const express = require ('express')
const { Server } = require('http')
const app = express()

app.get('/', function (req, res) {
    res.send('Home Page')
})

app.listen(3000)
