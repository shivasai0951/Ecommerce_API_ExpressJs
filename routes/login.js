const express = require('express');
const router = express.Router();


//login model 

const login=require('../models/login');


///Get api
router.get('/',(req,res)=>{
    login.find().sort({date:-1}).then(login=>res.json(login)).catch(err=>console.log(err))
})

///Post api
router.post('/',(req,res)=>{
    const newlogin=new login({email: req.body.email,password:req.body.password,type:req.body.type,Name:req.body.name,Contact:req.body.contact});
    newlogin.save().then(login=>res.json(login));
})


router.get('/:email', async (req, res) => {
    try {
        const loginRes = await login.findOne({ email: req.params.email });
        console.log(loginRes);
        if (!loginRes) {
            return res.status(404).json({ success: false, message: 'No User Found' });
        }
        res.json(loginRes);
    } catch (e) {
        res.status(400).json({ Result: 'An error occurred', error: e.message });
    }
});

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
    .then(productid => {
        if (!productid) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
       try{
        productid.deleteOne().then(()=>res.json({ success: true, message: 'User deleted' }));
       }catch(err){
        console.log(err);
       }
    })
    .catch(err=>{
        res.status(500).json({ success: false, message: 'Server error' });
    });
})

module.exports = router; 