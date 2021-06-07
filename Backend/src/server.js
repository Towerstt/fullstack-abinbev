const express = require('express')
const cors = require('cors')
const usersRouter = require('./routers/users')
const articlesRouter = require('./routers/singleArticle')
const tagsRouter = require('./routers/tags')
const profilesRouter = require('./routers/profiles')
const app = express()

app.use(cors())
// app.use(middleware)
app.use('/users', usersRouter)
app.use('/articles', articlesRouter)
app.use('/tags', tagsRouter)
app.use('/profiles', profilesRouter)

module.exports = app