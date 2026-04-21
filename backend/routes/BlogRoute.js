const express = require('express')
const Router= express.Router()
const BlogController = require('../controllers/BlogController')

Router.post('/createblog',BlogController.CreateBlog)

module.exports= Router