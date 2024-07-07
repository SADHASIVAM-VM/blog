const mongoose = require('mongoose')

const SignUpSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        type: String,
        lowercase:true,
        trim:true
    },
    password:String
})

const SignUPModel = mongoose.model("signUp", SignUpSchema)

module.exports = SignUPModel;