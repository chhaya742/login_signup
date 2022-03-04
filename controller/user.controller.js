require("dotenv").config();
const user=require("../database/user.db")

const {sign } = require("jsonwebtoken");


insert_data=async (req,res) =>{
    let user_1=new user( { email: req.body.email, Firstname: req.body.Firstname, Lastname: req.body.Lastname, NewPassword: req.body.NewPassword, ConfirmPassword:req.body.ConfirmPassword})
   
    try{
        const a =await user.insertMany(user_1)
        console.log(a);
        res.send({success:"register ",user:a})
    }
    catch(err){
        console.log(err);
    }
    // console.log(myobj);
    // client.connect();
    // const db = client.db("BLOG")
//     db.collection('UserDetail').insertOne(myobj,function(err, result) {
//         if (err){
//             res.send(err)
//         }
    
//         else{

//         console.log(" inserted");
//         res.send( {success:"register login",user:result})   
//         }
//       });
}
login=(req,res)=>{
        client.connect();
        var dbo = client.db("BLOG");
        dbo.collection("UserDetail").findOne({email:req.body.email,password:req.body.password}, function(err, result) {
            const token=sign({id:result._id},"chhayabagwan",{ expiresIn:"6h"})
            // console.log(result._id);
            res.cookie("user",token)
            if (err){
                res.send(err)
            }
            else{
            console.log("login");
            res.send({success:"User login succesfully",user:result})
            
            }
        });
}
logoutUser=(req,res)=>{
    res.clearCookie("user")
    res.json({message:"logout success"})
  
  
  }
  
module.exports={insert_data,login,logoutUser}
