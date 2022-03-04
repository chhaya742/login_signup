const express = require("express");
const cookieParser=require("cookie-parser")
const app = express();
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());

const router = require("./routes/routes");
app.use(express.static('staric'))

// app.get("/",(req,res)=>{
//   res.json({message:"ok"})
//   console.log("ok");
// })
app.use("/", router);



app.listen(process.env.PORT,"localhost", () => {
  console.log(`SERVER IS RUNNING AT PORT '${process.env.PORT}`);
});


