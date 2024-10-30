const express = require('express');
const router = express.Router();

//login model 

const login=require('../models/login');

const getAllUsers = async (req,res)=>{
    login.find().sort({date:-1}).then(login=>res.json(login)).catch(err=>console.log(err))
}

module.exports ={getAllUsers}