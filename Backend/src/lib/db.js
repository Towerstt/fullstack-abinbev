const mongoose = require('mongoose')

const {
    DB_PROTOCOL,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const url = `${DB_PROTOCOL}//${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


function connect() {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

module.exports = connect