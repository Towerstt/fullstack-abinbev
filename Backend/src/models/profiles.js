const mongoose = require('mongoose')
const profileSchema = new mongoose.Schema({
    username : {
        type : String,
        minLength : 2,
        maxLength : 20,
        match : [/\w/, 'Use only letters and numbers'],
        required : true
    },
    bio : {
        type : String,
        minLength : 10,
        required : true
    },
    image : {
        type : String,
        match : [/^http.:\/\/.*\..*/gm, 'It has to be your image url'],
        required : true
    },
    following : {
        type : [String],
        default : []
    }
})

const model = mongoose.model('profile', profileSchema)
module.exports = model