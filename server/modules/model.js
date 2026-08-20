const mongoose=require('mongoose');
const{type}=require('os');
const{start}=require('repl');


const registerSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
    type:String,
    },

    number:{
    type:Number,
},
password:{
    type:String,
}
})

module.exports=mongoose.model('User',registerSchema);