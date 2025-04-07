let express = require("express");
const Connectdb = require("./lib/db.connect");
let cors = require("cors");
let cookieparser = require("cookie-parser");
const authrouter = require("./module/auth.module");
const busrouter = require("./module/bus.module");

let app = express()

app.use(express.json())

const allowedOrigins = [
    "http://localhost:5173",
    "https://busbooking-57jj.onrender.com",
    "https://busbuddy-alpha.vercel.app/"
  ];
  
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    })
  );
  
  

app.use(cookieparser());

Connectdb()

app.use("/auth",authrouter)

app.use("/bus",busrouter)



app.listen(4000,()=>{

    console.log("server is running at : http://localhost:4000");
    
})