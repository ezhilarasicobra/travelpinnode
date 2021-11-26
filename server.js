const path=require('path')
require('dotenv').config({path:path.resolve(__dirname,'./.env')})

const express=require('express')
const cors=require('cors')
const dbconnection=require('./db')
const Pinrouter=require('./routes/pins')
const Userrouter=require('./routes/users')
const app=express()
dbconnection()
app.use(cors())
app.use(express.json())

app.use('/api/pins',Pinrouter)
app.use('/api/users',Userrouter)


app.listen(process.env.PORT,console.log(`App is listening on ${process.env.PORT}`))