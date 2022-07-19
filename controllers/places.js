const router = require('express').Router()

app.get('/', function (req, res) {
    res.send('GET /places')
})

module.exports = router