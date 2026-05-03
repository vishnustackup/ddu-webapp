const jwt = require('jsonwebtoken')

const AuthMiddleware = async (req, res, next) => {

    const header = req.header('Authorization')
    console.log(header);
    
    if (!header) {
        return res.status(400).json({ msg: "no token please login" })
    }
    try {
        const token = header.split(" ")[1]

        const decodedtoken = jwt.verify(token, process.env.SECRET_KEY)
        req.user= decodedtoken
        next()
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" })

    }

}


module.exports = AuthMiddleware