const jwt = require('jsonwebtoken');
const user = require('../models/SignUpModel')
const dotenv = require("dotenv")
const path = require('path')
dotenv.config({path: path.join(__dirname,"Config",".env")})


const verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({message:'Token is required'});
    }

    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, async(err, decode)=>{

            if(err){
                return res.status(403).json({msg:"No Vaild Token 14", err: err.message})
                
            }
            const users = await user.findOne({email: decode.email})
            if(!users){
                return res.json({mesage:"Expried email"})
            }
            req.user = users
            console.log(users)
            next()
        });
        
        
};
module.exports = verifyToken;