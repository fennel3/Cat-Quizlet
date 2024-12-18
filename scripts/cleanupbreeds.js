const breeds = require('../breeds.json')
const fs = require ('fs')

const cleanedBreads = breeds.map(breed => {
    return {
        name : breed.name,
        id : breed.id
    }
})

fs.writeFileSync('cleanedBreads.json', JSON.stringify(cleanedBreads, null, 2))
