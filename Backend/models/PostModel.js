const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postTitle: String,
    content: String,
    category:String,
    imageUrl:String,
    posted_Date:Date,
    username:String


},{
    timestamps:true
})
const PostModel = mongoose.model('posts', PostSchema);

module.exports =PostModel;