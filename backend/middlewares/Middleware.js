const jwt = require('jsonwebtoken')

const AuthMiddleware = async (req, res, next) => {
    try {

        // for testing with postman
        // const header = req.header('Authorization')
        // console.log(header);

        // if (!header) {
        //     return res.status(400).json({ msg: "no token please login" })
        // }

        // const token = header.split(" ")[1]

        // for rendering in react

        const token = req.cookies.token   // from cookie

        if (!token) {
            return res.status(401).json({ msg: "Not authenticated" })
        }
        const decodedtoken = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decodedtoken
        next()
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" })

    }

}


module.exports = AuthMiddleware