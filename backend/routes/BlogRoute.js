const express = require('express')
const Router = express.Router()
const BlogController = require('../controllers/BlogController')

Router.post('/createblog', BlogController.CreateBlog)
Router.get('/allposts', BlogController.getposts)
Router.put('/updatepost/:id', BlogController.updatepost)
Router.delete('/deletepost/:id', BlogController.Deletepost)
module.exports = Router