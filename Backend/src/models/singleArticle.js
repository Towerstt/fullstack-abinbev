const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    slug: {
        type: String,
        required : true
    },
    title : {
        type : String,
        minLength : 10,
        maxLength : 100,
        required : true
    },
    description : {
        type : String,
        minLength : 10,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    tagList : {
        type : [String],
        required : [true, 'You must select at least one tag']
    },
    createdAt : {
        type : String,
        match : /20[1-2][0-9]-[0-1][0-9]-[0-3][0-9]T[0-2][0-9]:[0-2][0-9]:[0-5][0-9].[0-9]{3}Z/gm,
        required : true
    },
    updatedAt : {
        type : String,
        match : /20[1-2][0-9]-[0-1][0-9]-[0-3][0-9]T[0-2][0-9]:[0-2][0-9]:[0-5][0-9].[0-9]{3}Z/gm,
    },
    favorited : {
        type : [String], //Se marcará el nombre del usuario que lo marcó como favorito
        required : false,
        default : []
    },
    favoritesCount : {
        Type : Number,
        default : 0,
    },
    author : {
        required : true
    }
})

const model = mongoose.model('articles', articleSchema)
module.exports = model