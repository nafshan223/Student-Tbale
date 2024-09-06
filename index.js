const express= require("express")
const envv= require("dotenv")
const connection = require("./config/mongoose")
const router = require("./Router/testRouter")

const app=express()
connection()
app.use(express.json())
const cors = require('cors');
app.use(cors({
  origin: 'https://your-netlify-app.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(cors());

app.use("/",router)
envv.config()

const PORT= process.env.PORT || 4000

app.listen(PORT,console.log(`running in ${PORT} `))