const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
const BlogRoutes = require('./routes/BlogRoute')
const Userroutes = require('./routes/UserRoute')
const cors = require('cors')

const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use('/blog', BlogRoutes)
app.use('/user', Userroutes)
const PORT = 3000

app.listen(PORT, () => {
    console.log("server running");

}) 