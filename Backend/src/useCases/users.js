const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

async function register({
    email,
    password,
    username,
    bio,
    image
}) {
    const userFound = await Users.findOne({
        email
    }) 

    if (userFound) {
        throw new Error('User already exists')
    }

    const encryptedPassword = await bcrypt.hash(password)
    return Users.create({
        email,
        password: encryptedPassword,
        username,
        bio,
        image
    })
}

async function login (email, password) {
    const userFound = await Users.findOne({email})

    if (!userFound) {
        throw new Error('Invalid data')
    }
    const isValidPsw = await bcrypt.compare(password, userFound.password)

    if (!isValidPsw) throw  new Error ('Invalid data')
    
    return jwt.sign({ id : userFound._id})
}

async function currentUser (email){
    return await Users.find({email})
}

async function update (email, newData) {
    console.log(email, newData)
    const userToUpdate = await Users.findOneAndUpdate(email, newData)

    if(!userToUpdate){
        throw new Error ('Invalid data')
    }
    return userToUpdate
}

async function getOne (userID) {
    return Users.find({_id : userID})
}

async function getUser (username){
    return Users.find({username})
}

module.exports = {register, login, currentUser, update, getOne, getUser}