const express= require("express")
const cors=require('cors')
const envv= require("dotenv")
const connection = require("./config/mongoose")
const router = require("./Router/testRouter")

const app=express()
connection()
app.use(express.json())

app.use("/",router)
envv.config()

const PORT=  4001

app.listen(PORT,console.log(`running in ${PORT} `))