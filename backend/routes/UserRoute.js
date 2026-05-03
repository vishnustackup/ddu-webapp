const express = require('express')
const Router = express.Router()
const UserController = require('../controllers/UserController')
const { registerSchema } = require('../Validations/Validator')
const validation = require('../middlewares/ValidationMiddleware')

Router.post('/createuser', validation(registerSchema), UserController.registeruser)
Router.post('/loginuser', UserController.Login)
module.exports = Router

