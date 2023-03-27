const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const login = require('./routes/login')
const register = require('./routes/rigester')
const profile=require('./routes/profile')
const process = require('process');
let port = process.env.PORT || 5005
let mongoUri = process.env.MONGO
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("mongo database is connected..")).catch((error)=>console.log(error))
app.use('/login', login)
app.use('/register', register)
app.use('/profile',profile)
app.listen(port, () => console.log(`server is running at port ${port}....`));