const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
const BlogRoutes = require('./routes/BlogRoute')
const Userroutes = require('./routes/UserRoute')
// const morgan = require('morgan')
// app.use(morgan('dev'))
app.use(express.json())
app.use('/blog', BlogRoutes)
app.use('/user', Userroutes)
const PORT = 3000

app.listen(PORT, () => {
    console.log("server running");

}) 