const jwt = require('../lib/jwt')
const users = require('../usecases/users')

function auth(request, response, next) {
    try {
        const {
            authorization: token
        } = request.headers
        
        const isValidToken = jwt.verify(token)
    
        if (!isValidToken) {
            request.auth = false
            throw new Error('Not Authorized')
        }    

        request.user = isValidToken
        request.headers.auth = true

        next()

    } catch (error) {
        response.status(401)
        response.json({
            success : false,
            msg : 'Not Allowed',
            error : error.message
        })
    }
}

module.exports = auth