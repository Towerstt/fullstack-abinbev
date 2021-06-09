const express = require('express')
const users = require('../useCases/users')
const router = express.Router()
router.use(express.json())

router.post('/', async (request, response) => {
    try {
        const newUser = await users.register(request.body)
        response.json({
            success: true,
            msg: 'User registered successfully',
            data: {
                user: newUser
            }
        }) 
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            msg: 'Could not register',
            error: error.message
        })
    }
})

router.post('/login', async (request, response) => {
    try {
        const {
            email,
            password
        } = request.body
        const token = await users.login(email, password)
        response.json({
            success: true,
            msg: 'Logged in',
            data: {
                token
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            msg: 'Could not log in',
            error: error.message
        })
    }
})

router.get('/', async (request, response) => {
    try {
        const {
            email
        } = request.body
        const currentUser = await users.currentUser(email)
        response.json({
            success: true,
            msg: 'Current user set',
            data: {
                User: currentUser
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            msg: 'Could not set current user',
            error: error.message
        })
    }
})

router.put('/:email', async (request, response) => {
    try {
        const email = request.params.email
        const modifiedUser = users.update(email, request.body)
        response.json({
            success : true,
            msg : 'User updated successfully',
            data : {
                newUserData : 'Changes done'
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not update',
            error : error.message
        })

    }
})

module.exports = router