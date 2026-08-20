const model = require('../modules/model');
const registerUser = async(req, res)=>{
    const data = {
        username:req.query.username,
        email:req.query.email,
        number:req.query.number,
        password:req.query.password,
        c_pass:req.query.c_pass
    }
    if(data.c_pass == data.password){
        
        const checkUsername = await model.findOne({username:data.username});
        const checkEmail = await model.findOne({email:data.email});
        if(checkUsername){
            res.status(400).json("Username already exist");
        }else{
            if(checkEmail){
                res.status(401).json("Email Already exist in database use another");
            }else{
        const registerUser = new model(data);
        const saveData = await registerUser.save();
        if(saveData){
            res.status(200).json("User Registered Successfully");
        }else{
            res.status(400).json("Could not saved the user data");
        }
            }
        }
    }else{
        res.status(401).json("Password and confirm passowrd is not same");
    }
}

module.exports = { registerUser }