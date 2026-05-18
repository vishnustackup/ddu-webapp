const { log } = require('winston')
const Blog = require('../models/BlogModel')
const Logger = require('../utils/Logger')

const CreateBlog = async (req, res) => {

    const { title, description } = req.body
    try {

        const newdata = await new Blog({
            title,
            description,
            author: req.user.name
        })

        await newdata.save()



        res.status(200).json({ success: true, msg: "created successfully", data: newdata })
    } catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}

const getposts = async (req, res) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 })
        Logger.info('jkbjbj')

        res.status(200).json({ success: true, msg: "all posts", data: posts })
    } catch (error) {
        res.status(500).json({ msg: "server error " })
    }
}

const updatepost = async (req, res) => {
    try {
        const { id } = req.params
        const updatepost = await Blog.findByIdAndUpdate(id, req.body, { new: true })
        if (!updatepost) {
            res.status(404).json({ msg: "post not found" })
        }
        res.status(200).json({ success: true, msg: "post updated succesfully", updatedata: updatepost })
    } catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}

const Deletepost = async (req, res) => {
    try {
        const { id } = req.params
        const deletepost = await Blog.findByIdAndDelete(id)
        if (!deletepost) {
            res.status(404).json({ msg: "post not found" })
        }
        res.status(200).json({ success: true, msg: "deleted succesfully" })

    } catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}


const Getsinglepost = async (req, res) => {
    try {
        const { id } = req.params

        const getpost = await Blog.findById(id)
        res.status(200).json({
            success: true,
            msg: "succesfull",
            data: getpost
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "server error" })
    }
}
module.exports = { CreateBlog, getposts, updatepost, Deletepost, Getsinglepost }