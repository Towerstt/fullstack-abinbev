const Articles = require('../models/singleArticle')

//GET
async function getAll () {
    return await Articles.find({})
}

async function getByAuthor (author) {
    return await Articles.find({author})
}

async function getByFavorited (favoritedUser) {
    return await Articles.find({favorited : {$in, favoritedUser}})
}

async function getByTag (tag) {
    return await Articles.find({tags : {$in, tag}})
}

async function getBySlug (slug) {
    return await Articles.find({slug})
}

//POST
async function postNewArticle (articleToCreate) {
    return await Articles.create(articleToCreate)
}

//PATCH
async function updateArticle (slug, newData) {
    return await Articles.findOneAndUpdate({slug}, newData)
}

async function favoriteArticle (username, slug) {
    const filterArticle = await Articles.findOne({slug})
    filterArticle.favorited = [...filterArticle.favorited, username]
    filterArticle.favoritesCount += 1
    return await Articles.findByIdAndUpdate(articleID, filteredArticle)
}

async function unfavoriteArticle (slug, username){
    const filterArticle = await Articles.findOne({slug})
    filterArticle.favorited = filterArticle.favorited.filter((el) => el !== username)
    filterArticle.favoritesCount -= 1
    return await Articles.findByIdAndUpdate(articleID, filteredArticle)
}

//DELETE
async function deleteArticle (slug) {
    return await Articles.findByOneAndDelete({slug})
}



module.exports = {
    getAll,
    getByAuthor,
    getByFavorited,
    getByTag,
    getBySlug,
    postNewArticle,
    updateArticle,
    favoriteArticle,
    unfavoriteArticle,
    deleteArticle
}