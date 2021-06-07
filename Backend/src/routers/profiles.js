const express = require('express')
const profiles = require('../useCases/profiles')
const users = require('../useCases/users')
const router = express.Router()

router.get('/:celeb_username', async (request, response) =>{
    try {
        const username = request.params.celeb_username
        const profile = profiles.getProfile()
        response.json({
            success : true,
            msg : 'Profiled got successfully',
            data : {
                profile : profile
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not get the profile',
            error : error.message
        })
    }
})

router.post('/:celeb_username/follow', async (request, response) =>{
    try {
        const celebUsername = request.params.celeb_username
        const token = request.header.authorization
        const isValidToken = jwt.verify(token, JWT_SECRET)
        if (!isValidToken){
            throw new Error('Not authorized')
        }
        const userFound =await users.getOne(isValidToken.id)
        const celebUser = await users.getOne({celebUsername})
        const celebUserId = celebUser._id
        const userId = userFound._id
        const newFollow = await profiles.followProfile(userId, celebUserId)
        response.json({
            success : true,
            msg : 'Following successful',
            data : {
                follow : newFollow
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not post the follow',
            error : error.message
        })
    }
})

router.delete('/:celeb_username/follow', async (request, response) =>{
    try {
        const celebUsername = request.params.celeb_username
        const token = request.header.authorization
        const isValidToken = jwt.verify(token, JWT_SECRET)
        if (!isValidToken){
            throw new Error('Not authorized')
        }
        const userFound =await users.getOne(isValidToken.id)
        const celebUser = await users.getOne({celebUsername})
        const celebUserId = celebUser._id
        const userId = userFound._id
        const newFollow = await profiles.unfollowProfile(userId, celebUserId)
        response.json({
            success : true,
            msg : 'Unfollowing successful',
            data : {
                follow : newFollow
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not delete the follow',
            error : error.message
        })
    }
})

module.exports = router