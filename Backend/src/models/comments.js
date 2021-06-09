const mongoose = require('mongoose')
const commentsSchema = new mongoose.Schema({
    createdAt: {
        type: String,
        // Se debe editar el formato de fecha toISOString() desde el front
        match: /20[1-2][0-9]-[0-1][0-9]-[0-3][0-9]T[0-2][0-9]:[0-2][0-9]:[0-5][0-9].[0-9]{3}Z/gm,
        required: true
    },
    updatedAt: {
        type: String,
        match: /20[1-2][0-9]-[0-1][0-9]-[0-3][0-9]T[0-2][0-9]:[0-2][0-9]:[0-5][0-9].[0-9]{3}Z/gm,
    },
    body: {
        type: String,
        required: true
    },
    author: {
        // required : true
    },
    article_slug: {

    }
})

const model = mongoose.model('comments', commentsSchema)
module.exports = model