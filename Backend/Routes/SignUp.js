const express = require("express")
const router = express.Router()
const SignUPModel = require("../models/SignUpModel")

router.post('/',async(req, res)=>{
       try{
        const {name, email, password}= req.body
        const sign = await SignUPModel.findOne({email})
        if(!sign){
              const NewSign = new SignUPModel({name, email, password})
              await NewSign.save()
              res.status(201).json({message: " User Registred"})
        }
        else{
              return res.status(400).json({msg: "user Already registred", user_name:name})
        }
       
       }
       catch(err){
        console.log("Erv", err)
        res.status(500).json({msg:"Server error"})
       }
})

module.exports = router;