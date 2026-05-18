const express = require('express')
const Router = express.Router()
const BlogController = require('../controllers/BlogController')
const AuthMiddleware = require('../middlewares/Middleware')

Router.post('/createblog', AuthMiddleware, BlogController.CreateBlog)
Router.get('/allposts', BlogController.getposts)
Router.put('/updatepost/:id', AuthMiddleware, BlogController.updatepost)
Router.delete('/deletepost/:id', BlogController.Deletepost)
Router.get('/edit/:id', BlogController.Getsinglepost)
module.exports = Router