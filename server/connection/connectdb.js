const mongoose = require("mongoose");
const connectdb =(uri) =>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });
}

module.exports = connectdb;