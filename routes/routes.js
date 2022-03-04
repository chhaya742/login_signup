const express = require("express");
const router = express.Router();
const {insert_data,login,logoutUser}= require("../controller/user.controller");
const {insert_data1,list_data1}= require("../controller/post.controller");
const {insert_data2,list_data2}=require("../controller/Lile_Dislike");
const {verify } = require("jsonwebtoken");

authentication=(req,res,next)=>{
    token=req.cookies;
    // console.log(token);
    if (token.user==undefined){
        res.send({succses:0,
        message:"authentication erroe"})
    }else{
    verify(token.user,"chhayabagwan",(err,tokendata)=>{
        if(err){
            res.send({message:"authentication  erro"});

        }
        else if(tokendata.id==undefined){
            res.send({message:"authentication error"})
        }
        else{
            res.tokendata=tokendata
            next()
        }

    })}

}

router.get('/', (req, res) => {
    res.sendFile('/home/chhaya/Desktop/login_signup/static/index.html');
  });
  
  router.get('/login', (req, res) => {
    res.sendFile('/home/chhaya/Desktop/login_signup/static/login.html');
  });
  
  
//   router.post('/login',insert_data, (req, res) => {
//     // Insert Login Code Here
//     let email = req.body.email;
//     let password = req.body.password;
//     res.send(`{email: ${email} Password: ${password}}`);
//     // console.log(req.body.email);
//   });

router.post("/login",insert_data);
// router.post("/api/Login",login);
// router.get("/api/logout",logoutUser)


// router.get("/api/post",authentication, list_data1);
// router.post("/api/post",authentication,insert_data1);

// router.get("/api/like",authentication,list_data2);
// router.post("/api/like",authentication,insert_data2);




module.exports = router;