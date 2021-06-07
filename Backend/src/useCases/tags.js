const Tags = require('../models/tags')

async function getAll () {
    return await Tags.find({})
}

async function postTags (tags) {
    return tags.forEach(tag => await tags.create(tag));
}

module.exports = {
    getAll,
    postTags
}