const { default: mongoose } = require("mongoose");

const DB = ()=>{
mongoose.connect( process.env.DB_URL_STRING )
.then(()=> console.log("DB Connected..."))
.catch((err)=> console.log("DB Not Connected... ? ", err))
}

module.exports = DB;
