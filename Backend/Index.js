const express = require("express");
const app = express();
const DB = require("./models/Db_Connections");
const Rpost  = require("./Routes/All_Posts")
const RLogin  = require("./Routes/Login")
const RSign  = require("./Routes/SignUp")
const path = require("path");
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

dotenv.config({path: path.join(__dirname,"Config",".env")})

// Middleware
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.use(cors(process.env.URL))

DB(); 

app.get("/", (req, res) => {
  res.send("Welcome to WeDot Blog");
});
app.use('/post',Rpost);
app.use('/login',RLogin)
app.use('/sign',RSign)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
