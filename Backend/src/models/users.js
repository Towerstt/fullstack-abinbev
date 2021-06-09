const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    celeb_ : {
        type : Boolean,
        default : false
    },
    email: {
        type : String,
        validate : {
            validator : function() {
                if(this.celeb_){
                    return /celeb_[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
                }else{
                    return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
                }
            },
            message : 'You have to set a valid email'
        },
         
        maxLength : 100,
        required : true
    },
    password : {
        type : String,
        minLength : 1,
        required : true
    },
    username : {
        type : String,
        minLength : 2,
        maxLength : 20,
        function() {
            if(celeb_){
                return [/celeb_\w/, 'You should use only letters and numbers']
            }else{
                return [/\w/, 'You should use only letters and numbers']
            }
        },
        required : true
    },
    bio : {
        type : String,
        minLength : 10,
        required : true
    },
    image : {
        type : String,
        match : [/^http.:\/\/.*\..*/gm, 'You must set your image url'],
        required : true
    },
    following : {
        type : [String],
        default : []
    }
})

const model = mongoose.model('users', userSchema)
module.exports = model