const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Krusty Krab',
        city: 'Bikini Bottom',
        state: 'HI',
        cuisines: 'Polynesian, Seafood',
        pic: '/images/KrustyKrab.jpg'
      }, {
        name: `Bob's Burgers`,
        city: 'San Francisco',
        state: 'CA',
        cuisines: 'American, Diner',
        pic: '/images/Bob.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
