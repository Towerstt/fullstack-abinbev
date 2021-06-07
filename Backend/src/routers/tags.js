const express = require('express')
const tags = require('../useCases/tags')
const router = express.Router()

router.get('/tags', async (request, response) =>{
    try {
        const tags = await tags.getAll()
        response.json({
            success : true,
            msg : 'All tags got',
            data: {
                tags : tags
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not get tags',
            error : error.message
        })
    }
})

module.exports = router