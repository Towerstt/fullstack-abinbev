const express = require('express')
const articles = require('../useCases/singleArticle')
const users = require('../useCases/users')
const comments = require('../useCases/comments')
const tags = require('../useCases/tags')
const router = express.Router()

router.get('/', async (request, response) =>{
    try {
        const author = request.query.author || ''
        const favorited = request.query.favorited || ''
        const tag = request.query.tag || ''
        const slug = request.query.slug || ''
        let articlesFiltered = ''
        if(author){
            articlesFiltered = await articles.getByAuthor(author)
        }
        else if (favorited) {
            articlesFiltered = await articles.getByFavorited(favorited)
        }
        else if(tag) {
            articlesFiltered = await articles.getByTag(tag)
        }
        else if(slug) {
            articlesFiltered = await articles.getBySlug(slug)
        }
        else{
            const allArticles = await articles.getAll()
        }
        response.json({
            success : true,
            msg : 'Articles got successfully',
            data : {
                articles : articlesFiltered || allArticles
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not get articles',
            error : error.message
        })
    }
})

router.get('/feed', async (request, response) => {
    try {
        const allArticles = await articles.getAll()
        response.json({
            success : true,
            msg : 'Articles got successfully',
            data : {
                articles : articlesFiltered || allArticles
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not get articles',
            error : error.message
        })
    }
})

router.post('/', async (request,response) =>{
    try {
        const articleToPost = request.body
        const newArticle = await articles.postNewArticle(articleToPost)
        const tags = await tags.postTags(articleToPost.tags)
        response.json({
            success : true,
            msg : 'Article posted successfully',
            data : {
                newArticle : newArticle,
                tags : tags
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not post article',
            error : error.message
        })
    }
})

router.patch('/:slug', async (request, response) =>{
    try {
        const slug = request.params.slug
        const newData = request.body
        const articleUpdated = await articles.updateArticle(slug, newData)
        response.json({
            success : true,
            msg : 'Article updated successfully',
            data : {
                article : articleUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not update article',
            error : error.message
        })
    }
})

router.patch('/:slug/favourite', async (request, response) =>{
    try {
        const slug = request.params.slug
        const token = request.header.authorization
        const isValidToken = jwt.verify(token, JWT_SECRET)
        if (!isValidToken){
            throw new Error('Not authorized')
        }
        const userFound =await users.getOne(isValidToken.id)
        const username = userFound.username
        const newFav = await articles.favoriteArticle(username, slug)
        response.json({
            success : true,
            msg : 'Favorited successfully',
            data : {
                Fav : newFav
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not favorite article',
            error : error.message
        })
    }
})

router.delete('/:slug/favourite', async (request, response) =>{
    try {
        const slug = request.params.slug
        const token = request.header.authorization
        const isValidToken = jwt.verify(token, JWT_SECRET)
        if (!isValidToken){
            throw new Error('Not authorized')
        }
        const userFound =await users.getOne(isValidToken._id)
        const username = userFound.username
        const newFav = await articles.unfavoriteArticle(username, slug)
        response.json({
            success : true,
            msg : 'Unfavorited successfully',
            data : {
                Fav : newFav
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not unfavorite article',
            error : error.message
        })
    }
})

router.delete('/:slug', async (request, response) =>{
    try {
        const slug = request.params.slug
        const deletedArticle = await articles.deleteArticle(slug)
        response.json({
            success : true,
            msg : 'Article deleted successfully',
            data : {
                articleDeleted : deletedArticle
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Article could not be deleted',
            error : error.message
        })
    }
})

router.post('/:slug/comments', async (request, response) =>{
    try {
        const slug = request.params.slug
        const commentToPost = request.body
        const commentPosted = await comments.newComment(commentToPost)
        response.json({
            success : true,
            msg : 'Comment posted successfully',
            data : {
                comment : commentPosted
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not post the comment',
            error : error.message
        })
    }
})

router.get('/:slug/comments', async (request, response) =>{
    try {
        const slug = request.params.slug
        const commentsGot = await comments.getAll(slug)
        response.json({
            success : true,
            msg : 'Comments got successfully',
            data : {
                articleComments : commentsGot
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not get comments',
            error : error.message
        })
    }
})

router.delete('/:slug/comments/:commentId', async (request, response) =>{
    try {
        const slug = request.params.slug
        const commentId = request.params.commentId
        const article = articles.getBySlug(slug)
        const commentDeleted = await comments.deleteComment(commentId)
        response.json({
            success : true,
            msg : 'Comment deleted successfully',
            data : {
                comment : commentDeleted
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not delete the comment',
            error : error.message
        })
    }
})


module.exports = router