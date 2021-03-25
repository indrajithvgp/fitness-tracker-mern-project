const express = require('express')
let User = require('../models/user.model')


const router = express.Router()

const getFunc = async(req,res)=>{
    try{
        const user = await User.find()
        res.status(200).json({
            status: 'ok',
            results:user
        })
    }catch(err){
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}

const postFunc = async(req,res)=>{
    try{
        const user = await User.create(req.body)
        res.status(200).json({
            status: 'ok',
            results:user
        })
    }catch(err){
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}

router.route('/').get(getFunc)

router.route('/add').post(postFunc)

module.exports = router