const express = require('express')
const Router = express.Router()
const UserController = require('../controllers/UserController')


Router.post('/createuser', UserController.registeruser)

module.exports = Router

