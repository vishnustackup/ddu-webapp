const express = require('express')
const Router = express.Router()
const BlogController = require('../controllers/BlogController')
const AuthMiddleware = require('../middlewares/Middleware')

Router.post('/createblog',AuthMiddleware, BlogController.CreateBlog)
Router.get('/allposts', BlogController.getposts)
Router.put('/updatepost/:id', BlogController.updatepost)
Router.delete('/deletepost/:id', BlogController.Deletepost)
module.exports = Router