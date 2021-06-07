const Tags = require('../models/tags')

async function getAll () {
    return await Tags.find({})
}

function postTags (tags, slug) {
    console.log(tags)
    return Tags.create({tags, slug})
}

module.exports = {
    getAll,
    postTags
}