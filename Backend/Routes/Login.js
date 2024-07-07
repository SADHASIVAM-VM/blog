const exp = require("express")
const Sign = require("../models/SignUpModel")
const router = exp.Router()
const jwt = require("jsonwebtoken")
const verifyToken = require("../middleware/VerifyToken")

const generateToken =(user)=>{ 
  return jwt.sign({email:user}, process.env.SECRET_KEY, {expiresIn:'1h'})
}


router.get('/', async(req, res)=>{
    const data =await Sign.find({})
    res.status(200).json({data: data})
})

router.post('/', async (req, res)=>{
   
  try{
    const {email, password} = req.body
    //console.log({email, password})
    const user = await Sign.findOne({email});
    if(password === user.password && email === user.email){
     const token = generateToken(user.email)
     return res.status(200).json({message:"Welcome Back  To WeDot", user:user, token})
    }
    res.status(404).json({message:"Check Email / password"})
    
  }
  catch(err){
    console.log("EEVR", err)
    res.status(400).json({message: "Sorry !.. Please SignUP"})
  }
})

router.get('/datas', verifyToken, (req, res)=>{
  const userData = req.user;
  res.json({message:"Protected", userData})
})

router.get('/:id', async(req, res)=>{
 try{
  const {id}= req.params
  console.log(id)
  const user = await Sign.findById({_id:id})
  if(user){
    res.status(200).json({message:"Single Id Page", data:user})
  }
 }
 catch(err){
  
  res.status(404).json({message:"Try Again..."})
 }
 
})

module.exports = router;
