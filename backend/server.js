const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const excerciseRouter = require('./routes/excercise.route')
const userRouter = require('./routes/user.route')

require('dotenv').config({path:'./config.env'})

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(()=>console.log("DB Connection Successful")).catch(err=>console.log(err.message))

const app =express()
const port = process.env.PORT || 8000

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

app.use('/excercises', excerciseRouter)
app.use('/users', userRouter)

app.listen(port,()=>{
    console.log(`*** Server running on ${port} ...`)
})
