const mongoose=require("../database/db")

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required: true
    },
    Firstname:{
        type:String,
        required: true
    } ,
    Lastname: {
        type:String,
        required: true
    },
    NewPassword:{
        type:String,
        required: true
    },
    ConfirmPassword:{
        type:String,
        required: true
    }

})
const user=mongoose.model("user",userSchema)
module.exports=user