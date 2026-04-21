const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
const BlogRoutes= require('./routes/BlogRoute')

app.use(express.json())
app.use('/blog',BlogRoutes)
const PORT= 3000

app.listen(PORT,()=>{
    console.log("server running");
    
})