const mongoose = require('mongoose')
const tagsSchema = new mongoose.Schema({
    tags : {
        type : [String]

    }
})