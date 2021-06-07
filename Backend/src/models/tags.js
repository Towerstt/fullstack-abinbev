const mongoose = require('mongoose')
const tagsSchema = new mongoose.Schema({
    tags : {
        type : [String],
        required : true
    },
    slug :{
        type : String,
        required : true
    }
    
})

const model = mongoose.model('tags', tagsSchema)
module.exports = model