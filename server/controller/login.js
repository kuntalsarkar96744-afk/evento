const model = require('../modules/model');
const loginUser = async(req, res)=>{
try {   
    const data = {
        name:req.query.username,
        password:req.query.password,
    }
     const foundUser = await model.findOne({username:data.name});
     if(!foundUser){
        res.status(401).json("User Does not exist");
     }else{
        if(foundUser.password == data.password){
            res.status(200).json("Login Successfull");
        }else{
            res.status(400).json("Password is not matching");
        }
     }
} catch (error) {
    console.log(error);
}
    
}


const allData = async(req, res)=>{
    try {
        const data = await model.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}
module.exports = { loginUser, allData }