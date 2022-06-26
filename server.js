const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require("body-parser")
const path = require('path')
const favicon = require('serve-favicon')
const app = express()

const connectDB = require('./server/database/connection');
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080



//log reqests morgan -----------------------------
app.use(morgan('tiny'))



 // mongodb connection 
 connectDB();




// parse request to body-parser------------------
app.use(bodyparser.urlencoded({ extended: true }))





//set view engine -------------------------------
app.set("view engine", "ejs")




// server favicon files 

app.use(favicon(path.join(__dirname, 'assets','img', 'favicon.ico')))


//load assests ----------------------------------
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
//css
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
//img
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
//js
app.use('/env', express.static(path.resolve(__dirname, '/.env')))



// //render 404 page----------------------

// app.use((req, res ,next)=>{
//     res.status(404).render('404.ejs')
// })

// app.get('*',(req, res)=>{
//     res.status(404).render('404.ejs')
// })





// load all routers here ----------------------

app.use('/',require('./server/routes/router'))


//All PORT's here -----------------------------

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}) 