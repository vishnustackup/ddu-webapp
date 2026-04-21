const Blog = require('../models/BlogModel')


const CreateBlog = async (req, res) => {
    const { title, description, author } = req.body
    try {

        const newdata = await new Blog({
            title,
            description,
            author
        })
        await newdata.save()
        res.status(200).json({ msg: "created successfully", data: newdata })
    } catch (error) {
        res.status(500).json({ msg: "server error" })
    }
}
module.exports = { CreateBlog }