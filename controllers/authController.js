const {handleError} = require("./errorController");
const User = require('../models/user');
const UserToken = require('../models/userToken');
const {Base64} = require('js-base64');

const signup = async (req, res) => {
    try {
        const body = req.body
        const user = await User.findOne({username: body.username, email: body.email});
        if (!user) {
            await User.create(body);
            res.status(201).json('Created')
        } else {
            handleError(res, 409, {message: 'User with such email or username already exists'})
        }
    } catch (error) {
        handleError(res, 500, error)
    }
}

const login = async (req, res) => {
    try {
        const body = req.body
        const user = await User.findOne({username: body.username, email: body.email, password: body.password});
        if (user) {
            const token = await UserToken.findOne({userId: user._id});
            if (token) {
                res.status(200).json(token)
            } else {
                const newToken = await UserToken.create({
                    userId: user._id,
                    token: Base64.encode(user._id + ' ' + user.username + ' ' + user.password)
                })
                res.status(200).json(newToken)
            }
        } else {
            handleError(res, 409, {message: 'User with such email or username does not exist'})
        }
    } catch (error) {
        handleError(res, 500, error)
    }
}

const logout = async (req, res) => {
    try {
        const headers = req.headers
        if (headers.authorization) {
            const token = await UserToken.findOne({token: headers.authorization.split(' ')[1]})
            if (token) {
                await UserToken.deleteOne(token)
                res.status(200).json('Logged out')
            }else{
                handleError(res, 401, {message: 'Unauthorized'})
            }
        }
    } catch (error) {
        handleError(res, 500, error)
    }
}


module.exports = {
    signup: signup,
    login: login,
    logout: logout
}