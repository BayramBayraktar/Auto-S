const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cookiParser = require('cookie-parser');
const env = require('dotenv');
const cors = require('cors')


//node js and React
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

//Client Public
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: true }))

//env Config
env.config();

//Express Json 
app.use(express.json({ extented: true }))

//cookie parser 
app.use(cookiParser())


//Connect Database
mongoose.connect(process.env.DB_CONNECT,
    //New Url Parser
    { useNewUrlParser: true },
    //Check database connection
    () => console.log('Connect Database'))



//Auth router
const auth = require('./Router/auth')
app.use('/', auth)

//Post Router
const PostCarRouter = require('./Router/Post');
app.use('/', PostCarRouter)



app.listen(process.env.PORT || 8000, () => console.log('server in running port ' + 8000))




