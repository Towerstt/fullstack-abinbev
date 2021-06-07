const Comments = require('../models/comments')

//GET
async function getAll (slug) { 
    return await Comments.find({slug})
}

//POST
async function newComment (data) {
    return await Comments.create(data)
}

//DELETE
async function deleteComment (commentID) {
    return await Comments.findOneAndDelete(commentID)
}

module.exports = {
    getAll,
    newComment,
    deleteComment
}