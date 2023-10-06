
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

module.exports = function async(req, res, next) {

    const token = req.cookies.User_

    if (token) {
        jwt.verify(token, process.env.jwtKey, (err, payload) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Plase log in to get access'
                })
            } else {
                const { _id } = payload;
                User.findById(_id).then(userData => {
                    req.user = userData;
                    next()
                })
            }
        })
    } else {
        return res.json({
            success: false,
            message: 'Plase log in to get access'
        })
    }



}
