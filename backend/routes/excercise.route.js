const express = require('express')
let Excercises = require('../models/excercise.model')


const router = express.Router()

const getFunc = async(req,res)=>{
    try{
        const excercise = await Excercises.find()
        res.status(200).json({
            status: 'ok',
            results:excercise
        })
    }catch(err){
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}

const getSpec = async(req, res) =>{
    try{
        const excercise = await Excercises.findById(req.params.id);
        res.status(200).json({
            status: 'ok',
            result: excercise
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
        const userName = req.body.userName
        const description = req.body.description
        const duration = Number(req.body.duration)
        const date = Date.parse(req.body.date)
        const excercise = await Excercises.create(req.body)
        res.status(200).json({
            status: 'ok',
            results:excercise
        })
    }catch(err){
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
}

const delSpec = async(req, res) =>{
    try{
        await Excercises.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'ok',
            message: "Successful"
        })
    }catch(err){
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
} 

const updSpec = async(req, res) =>{
    try{
        const excercise = await Excercises.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidator:true
        });
        res.status(200).json({
            status: 'ok',
            message: "Successful",
            result:excercise
        })
    }catch(err){
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
} 

router.route('/').get(getFunc)

router.route('/:id').get(getSpec).delete(delSpec).patch(updSpec)

router.route('/add').post(postFunc)



module.exports = router