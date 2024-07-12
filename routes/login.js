const express = require('express');
const router = express.Router();

//login model 

const login=require('../models/login');


///Get api
router.get('/',(req,res)=>{
    login.find().sort({date:-1}).then(login=>res.json(login))
})

///Post api
router.post('/',(req,res)=>{
    const newlogin=new login({email: req.body.email,password:req.body.password});
    newlogin.save().then(login=>res.json(login));
})

///Get single item 
router.get('/:id',(req,res)=>{
    login.findById(req.params.id)
    .then(login=>res.json(login))
    .catch(err=>res.status(404).json({success:false}));
})

///update single item 
router.put('/:id',(req,res)=>{
    login.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(login=>res.json(login))
    .catch(error=>res.status(404).json({success:false}));
})

///Get single item 
router.delete('/:id',(req,res)=>{
    login.findById(req.params.id)
    .then(login=> login.remove().then(()=>res.json({success:true})))
    .catch(erroe=>res.status(404).json({success:false}))
})

module.exports = router; 