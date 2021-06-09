const Comments = require('../models/comments')

async function getAll(slug) {
    return await Comments.find({
        article_slug: slug
    })
}

async function newComment(data) {
    return await Comments.create(data)
}

async function deleteComment(commentID) {
    return await Comments.findOneAndDelete(commentID)
}

module.exports = {
    getAll,
    newComment,
    deleteComment
}