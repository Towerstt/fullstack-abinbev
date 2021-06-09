const Profiles = require('../models/profiles')
const Users = require('../models/users')

async function getProfile (username) {
    return await Users.find({username})
}

async function followProfile (userID, profileID) {
    const activeUser = await Users.findById(userID)
    if(activeUser.following.includes(profileID)){
        throw new Error (`Already following ${activeUser.username}`)
    }
    activeUser.following.push(profileID)
    console.log(activeUser)
    return await Users.findByIdAndUpdate(activeUser._id, activeUser)
}

async function unfollowProfile (userID, profileID) {
    const activeUser = await Users.findById(userID)
    if(!activeUser.following.includes(profileID)){
        throw new Error (`You are not following ${activeUser.username}`)
    }
    activeUser.following = activeUser.following.filter ((el) => el != profileID)
    console.log(activeUser.following)
    return await Users.findByIdAndUpdate(activeUser._id, activeUser)
}

module.exports = {
    getProfile,
    followProfile,
    unfollowProfile
}