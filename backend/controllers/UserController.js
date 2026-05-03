const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const saltrounds = 10
const jwt = require('jsonwebtoken')
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

const Login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ msg: "user not registered, please register" })
        }
        const MatchPasword = await bcrypt.compare(password, user.password)
        if (!MatchPasword) {
            return res.status(404).json({ msg: "Invalid credentials" })

        }

        const token = jwt.sign({ id: user._id, name: user.name }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.status(200).json({ msg: "loggedIn succesfully", token: token })
    } catch (error) {
        return res.status(500).json({ msg: "Server error" })

    }
}

module.exports = { registeruser, Login }