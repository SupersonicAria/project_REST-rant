const db = require('../models')

db.Place.create([{
    name: 'Krusty Krab',
    city: 'Bikini Bottom',
    state: 'HI',
    cuisines: 'Polynesian, Seafood',
    pic: '/images/KrustyKrab.jpg',
    founded: 1999
}, {
    name: 'Bob\'s Burgers',
    city: 'Ocean City',
    state: 'NJ',
    cuisines: 'American, Pub',
    pic: '/images/Bob.jpg',
    founded: 2011
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})