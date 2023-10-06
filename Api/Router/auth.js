const Router = require('express').Router();
const User = require('../Models/User');
const Jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



Router.post('/signup', async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    const hashPassowrd = await bcrypt.hash(req.body.password, salt)

    const foundEmail = await User.findOne({ email: req.body.email })
    if (foundEmail) return res.json("previously registered e-mail")

    const foundPhoneNumber = await User.findOne({ phoneNumber: req.body.phoneNumber })
    if (foundPhoneNumber) return res.json("previously registered phone number")

    const signuObj = await User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashPassowrd,
        address: req.body.address
    })

    await signuObj.save().then(() => res.json({ redirect: true }))
})

const maxTime = 60 * 60 * 1

Router.post("/login", async (req, res) => {


    const { email, password } = req.body

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Plase enter all the required fields."
        })
    }

    //Eposta or number contoroller

    await User.findOne({ email: email })
        .then(savedUser => {

            if (!savedUser) {
                return res.json({
                    success: false,
                    message: "email not found."
                })
            }

            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        Jwt.sign({ _id: savedUser._id }, process.env.jwtKey, ((err, token) => {

                            if (err) {
                                res.json({
                                    success: false,
                                    message: 'something went wrong',
                                    redirect: true
                                })
                            }
                            if (token) {
                                res.cookie('User_', token, { maxAge: maxTime * 1000, httpOnly: false }).status(200).json({
                                    success: true,
                                    data: {}
                                })
                            }

                        }))

                    } else {
                        return res.json({
                            success: false,
                            message: 'Wrong password'
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log(err)
        })


})



Router.get('/logout', async (req, res) => {
    res.cookie('verify_', '', { Maxage: 1 })
    res.send("Invalid ")

})

module.exports = Router
