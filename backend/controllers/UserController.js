const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const saltrounds = 10
const registeruser = async (req, res) => {
    const { name, password, email } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ msg: "user already exist" })
        }
        const hashedpassword = await bcrypt.hash(password, saltrounds)
        const userdata = await new User({
            name,
            email,
            password: hashedpassword
        })
        await userdata.save()
        res.status(201).json({ msg: "user created succesfully", data: userdata })
    } catch (error) {
        res.status(500).json({ msg: "server error" })
    }

}

module.exports = { registeruser }