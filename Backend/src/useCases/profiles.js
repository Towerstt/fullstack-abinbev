const Profiles = require('../models/profiles')
const Users = require('../models/users')

async function getProfile (username) {
    return await Users.findOne({username})
}

async function followProfile (userID, profileID) {
    const activeUser = await Users.findById({userID})
    activeUser.following.push(profileID)
}

async function unfollowProfile (userID, profileID) {
    const activeUser = await Users.findById(userID)
    activeUser.following = activeUser.following.filter ((el) => el !== profileID)
    return await Users.findByIdAndUpdate(userID, activeUser)
}

module.exports = {
    getProfile,
    followProfile,
    unfollowProfile
}